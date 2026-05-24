import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

type User = { id: number; name: string; email: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

function getToken(): string | null {
  return typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
}

function setToken(token: string | null) {
  if (typeof window !== "undefined") {
    if (token) localStorage.setItem("auth_token", token);
    else localStorage.removeItem("auth_token");
  }
}

async function apiPost(path: string, body: unknown) {
  return fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function apiGet(path: string) {
  const token = getToken();
  return fetch(path, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) { setLoading(false); return; }
    apiGet("/api/auth/session")
      .then((r) => r.json() as Promise<{ user: User | null }>)
      .then((data) => { setUser(data.user || null); })
      .catch(() => { setToken(null); })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await apiPost("/api/auth/login", { email, password });
    const data: { error?: string; token?: string; user?: User } = await res.json();
    if (data.error) return { error: data.error };
    setToken(data.token!);
    setUser(data.user!);
    return {};
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    const res = await apiPost("/api/auth/signup", { name, email, password });
    const data: { error?: string; token?: string; user?: User } = await res.json();
    if (data.error) return { error: data.error };
    setToken(data.token!);
    setUser(data.user!);
    return {};
  }, []);

  const logout = useCallback(async () => {
    const token = getToken();
    if (token) {
      try { await apiPost("/api/auth/logout", {}); } catch { /* ignore */ }
    }
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
