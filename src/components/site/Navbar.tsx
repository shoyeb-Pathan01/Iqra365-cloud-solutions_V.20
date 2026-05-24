import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-0 md:py-1" : "py-1 md:py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`glass rounded-2xl px-4 md:px-6 py-1 md:py-2 flex items-center justify-between shadow-elegant transition-all ${
            scrolled ? "shadow-glow-azure/50" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-14 md:h-20 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="hidden md:flex items-center gap-2 mr-2">
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <button onClick={logout} aria-label="Log out" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:inline-flex px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign in</Link>
            )}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button asChild className="hidden md:inline-flex bg-gradient-orange text-white hover:opacity-90 shadow-glow-orange border-0">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden glass mt-1 rounded-2xl p-4 shadow-elegant"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
                {user ? (
                  <button onClick={logout} className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium w-full text-left">
                    <LogOut className="h-4 w-4" /> Sign out
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium block">Sign in</Link>
                    <Link to="/signup" className="px-4 py-3 rounded-lg hover:bg-secondary text-sm font-medium block">Sign up</Link>
                  </>
                )}
                <Button asChild className="w-full mt-2 bg-gradient-orange text-white border-0">
                  <Link to="/contact">Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
