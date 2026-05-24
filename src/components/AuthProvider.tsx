import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import * as clientAuth from "@/lib/client-auth";

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
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

function setToken(token: string | null) {
  if (typeof window === "undefined") return;
  if (token) localStorage.setItem("auth_token", token);
  else localStorage.removeItem("auth_token");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const u = clientAuth.getSessionUser(token);
      if (u) setUser(u);
      else setToken(null);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await clientAuth.login(email, password);
    if (result.error) return { error: result.error };
    setToken(result.token!);
    setUser(result.user!);
    return {};
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    const result = await clientAuth.signup(name, email, password);
    if (result.error) return { error: result.error };
    setToken(result.token!);
    setUser(result.user!);
    return {};
  }, []);

  const logout = useCallback(async () => {
    const token = getToken();
    if (token) clientAuth.logout(token);
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
