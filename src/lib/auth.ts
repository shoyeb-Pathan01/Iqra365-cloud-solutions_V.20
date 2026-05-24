import { createUser, getUserByEmail, createSession, getSession, deleteSession } from "./db";

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function fromHex(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  return bytes.buffer;
}

async function hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
  const useSalt = salt || crypto.randomUUID();
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: encoder.encode(useSalt), iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    256,
  );
  return { hash: hex(bits), salt: useSalt };
}

export function generateToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return hex(bytes.buffer);
}

export async function signup(name: string, email: string, password: string) {
  const existing = await getUserByEmail(email);
  if (existing) return { error: "Email already registered" };
  const { hash, salt } = await hashPassword(password);
  const user = await createUser(name, email, `${salt}:${hash}`);
  if (!user) return { error: "Failed to create user" };
  const token = generateToken();
  await createSession(user.id as number, token);
  return { token, user: { id: user.id, name: user.name, email: user.email } };
}

export async function login(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) return { error: "Invalid email or password" };
  const stored = user.password_hash as string;
  const [salt, hash] = stored.includes(":") ? stored.split(":") : [stored, ""];
  const { hash: computedHash } = await hashPassword(password, salt);
  if (computedHash !== hash) return { error: "Invalid email or password" };
  const token = generateToken();
  await createSession(user.id as number, token);
  return { token, user: { id: user.id, name: user.name, email: user.email } };
}

export async function getSessionUser(token: string) {
  const session = await getSession(token);
  if (!session) return null;
  return { id: session.id, name: session.name, email: session.email };
}

export async function logout(token: string) {
  await deleteSession(token);
}

export function getTokenFromRequest(request: Request): string | null {
  const header = request.headers.get("Authorization");
  if (header?.startsWith("Bearer ")) return header.slice(7);
  const url = new URL(request.url);
  return url.searchParams.get("token") || null;
}
