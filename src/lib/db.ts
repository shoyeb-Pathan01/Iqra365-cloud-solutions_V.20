import { getDb } from "./env";

const memoryStore: {
  users: Array<{ id: number; name: string; email: string; password_hash: string; created_at: string }>;
  sessions: Array<{ id: number; user_id: number; token: string; created_at: string }>;
  consultations: Array<{ id: number; name: string; email: string; phone: string; company: string; service: string; message: string; created_at: string }>;
} = {
  users: [],
  sessions: [],
  consultations: [],
};

let memId = 1;

export async function createUser(name: string, email: string, passwordHash: string) {
  const db = getDb();
  if (db) {
    const { results } = await db
      .prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?) RETURNING id, name, email, created_at")
      .bind(name, email, passwordHash)
      .run<{ id: number; name: string; email: string; created_at: string }>();
    return results?.[0] || null;
  }
  const existing = memoryStore.users.find((u) => u.email === email);
  if (existing) return null;
  const user = { id: memId++, name, email, password_hash: passwordHash, created_at: new Date().toISOString() };
  memoryStore.users.push(user);
  return { id: user.id, name: user.name, email: user.email, created_at: user.created_at };
}

export async function getUserByEmail(email: string) {
  const db = getDb();
  if (db) {
    const result = await db.prepare("SELECT * FROM users WHERE email = ?").bind(email).first<{ id: number; name: string; email: string; password_hash: string; created_at: string }>();
    return result || null;
  }
  return memoryStore.users.find((u) => u.email === email) || null;
}

export async function getUserById(id: number) {
  const db = getDb();
  if (db) {
    const result = await db.prepare("SELECT id, name, email, created_at FROM users WHERE id = ?").bind(id).first<{ id: number; name: string; email: string; created_at: string }>();
    return result || null;
  }
  return memoryStore.users.find((u) => u.id === id) || null;
}

export async function createSession(userId: number, token: string) {
  const db = getDb();
  if (db) {
    await db.prepare("INSERT INTO sessions (user_id, token) VALUES (?, ?)").bind(userId, token).run();
    return;
  }
  memoryStore.sessions.push({ id: memId++, user_id: userId, token, created_at: new Date().toISOString() });
}

export async function getSession(token: string) {
  const db = getDb();
  if (db) {
    const row = await db
      .prepare("SELECT s.token, s.user_id, u.id, u.name, u.email FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ?")
      .bind(token)
      .first<{ token: string; user_id: number; id: number; name: string; email: string }>();
    return row || null;
  }
  const session = memoryStore.sessions.find((s) => s.token === token);
  if (!session) return null;
  const user = memoryStore.users.find((u) => u.id === session.user_id);
  if (!user) return null;
  return { token: session.token, user_id: user.id, id: user.id, name: user.name, email: user.email };
}

export async function deleteSession(token: string) {
  const db = getDb();
  if (db) {
    await db.prepare("DELETE FROM sessions WHERE token = ?").bind(token).run();
    return;
  }
  const idx = memoryStore.sessions.findIndex((s) => s.token === token);
  if (idx !== -1) memoryStore.sessions.splice(idx, 1);
}

export async function saveConsultation(data: { name: string; email: string; phone: string; company: string; service: string; message: string }) {
  const db = getDb();
  if (db) {
    await db
      .prepare("INSERT INTO consultations (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)")
      .bind(data.name, data.email, data.phone, data.company, data.service, data.message)
      .run();
    return;
  }
  memoryStore.consultations.push({ id: memId++, ...data, created_at: new Date().toISOString() });
}
