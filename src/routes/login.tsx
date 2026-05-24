import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — Iqra365 Cloud Solutions" },
      { name: "description", content: "Sign in to your Iqra365 Cloud Solutions account." },
      { property: "og:title", content: "Sign In — Iqra365 Cloud Solutions" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) navigate({ to: "/" });
    else emailRef.current?.focus();
  }, [user, navigate]);

  if (user) return null;

  function validate() {
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError("Please enter a valid email address"); return false; }
    if (!password) { setError("Password is required"); return false; }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!validate()) return;
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      navigate({ to: "/" });
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="glass rounded-3xl p-8 md:p-10 shadow-elegant border-2 border-primary/10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
              <p className="text-muted-foreground text-sm">Sign in to your Iqra365 Cloud Solutions account</p>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-6 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive text-center">
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input
                    ref={emailRef}
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-orange text-white border-0 shadow-glow-orange group"
              >
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in...</> : "Sign in"}
                {!loading && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="font-semibold text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
