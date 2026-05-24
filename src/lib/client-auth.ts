type StoredUser = { id: number; name: string; email: string; passwordHash: string; createdAt: string };
type StoredSession = { token: string; userId: number; createdAt: string };

const USERS_KEY = "iqra365_users";
const SESSIONS_KEY = "iqra365_sessions";

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, data: T) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(data)); } catch { /* quota exceeded */ }
}

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
  const useSalt = salt || crypto.randomUUID();
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: encoder.encode(useSalt), iterations: 100000, hash: "SHA-256" },
    keyMaterial, 256,
  );
  return { hash: hex(bits), salt: useSalt };
}

function generateToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return hex(bytes.buffer);
}

export async function signup(name: string, email: string, password: string): Promise<{ error?: string; token?: string; user?: { id: number; name: string; email: string } }> {
  const users = load<StoredUser[]>(USERS_KEY, []);
  if (users.some((u) => u.email === email)) return { error: "Email already registered" };
  const { hash, salt } = await hashPassword(password);
  const id = Date.now();
  const user: StoredUser = { id, name, email, passwordHash: `${salt}:${hash}`, createdAt: new Date().toISOString() };
  users.push(user);
  save(USERS_KEY, users);
  const token = generateToken();
  const sessions = load<StoredSession[]>(SESSIONS_KEY, []);
  sessions.push({ token, userId: id, createdAt: new Date().toISOString() });
  save(SESSIONS_KEY, sessions);
  return { token, user: { id, name, email } };
}

export async function login(email: string, password: string): Promise<{ error?: string; token?: string; user?: { id: number; name: string; email: string } }> {
  const users = load<StoredUser[]>(USERS_KEY, []);
  const user = users.find((u) => u.email === email);
  if (!user) return { error: "Invalid email or password" };
  const stored = user.passwordHash;
  const [salt, hash] = stored.includes(":") ? stored.split(":") : [stored, ""];
  const { hash: computedHash } = await hashPassword(password, salt);
  if (computedHash !== hash) return { error: "Invalid email or password" };
  const token = generateToken();
  const sessions = load<StoredSession[]>(SESSIONS_KEY, []);
  sessions.push({ token, userId: user.id, createdAt: new Date().toISOString() });
  save(SESSIONS_KEY, sessions);
  return { token, user: { id: user.id, name: user.name, email: user.email } };
}

export function getSessionUser(token: string): { id: number; name: string; email: string } | null {
  const sessions = load<StoredSession[]>(SESSIONS_KEY, []);
  const session = sessions.find((s) => s.token === token);
  if (!session) return null;
  const users = load<StoredUser[]>(USERS_KEY, []);
  const user = users.find((u) => u.id === session.userId);
  if (!user) return null;
  return { id: user.id, name: user.name, email: user.email };
}

export function logout(token: string) {
  const sessions = load<StoredSession[]>(SESSIONS_KEY, []);
  const idx = sessions.findIndex((s) => s.token === token);
  if (idx !== -1) sessions.splice(idx, 1);
  save(SESSIONS_KEY, sessions);
}

export { load, save };
