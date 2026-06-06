import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Linkedin, Mail, MapPin, Phone, ArrowUpRight, ArrowRight } from "lucide-react";

const serviceLinks = [
  { to: "/services", label: "Microsoft 365 Solutions" },
  { to: "/services", label: "Azure Cloud Infrastructure" },
  { to: "/services", label: "Cloud Migration" },
  { to: "/services", label: "Cybersecurity & Compliance" },
  { to: "/services", label: "Identity & Access (Entra ID)" },
  { to: "/services", label: "Endpoint Security (Intune)" },
];

const techLinks = [
  { to: "/technologies", label: "Microsoft Azure" },
  { to: "/technologies", label: "Microsoft 365" },
  { to: "/technologies", label: "Microsoft Security" },
  { to: "/technologies", label: "Data & AI" },
  { to: "/technologies", label: "Power Platform" },
  { to: "/technologies", label: "DevOps & Development" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-green-brand" />
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="sm:col-span-2 lg:col-span-4">
              <Logo className="h-20 md:h-24 w-auto mb-4" />
              <p className="text-foreground/75 text-sm leading-relaxed max-w-sm">
                Iqra365 Cloud Solutions helps enterprises modernize IT, strengthen cybersecurity, and accelerate digital transformation with Microsoft Azure, Microsoft 365, and intelligent security solutions.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.linkedin.com/company/iqra365" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass hover:bg-primary/20 hover:shadow-glow-azure transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:hello@iqra365.com" className="p-2.5 rounded-xl glass hover:bg-primary/20 hover:shadow-glow-azure transition-all" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Services</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="group inline-flex items-center gap-1 text-sm text-foreground/75 hover:text-foreground transition-colors">
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Technologies</h4>
              <ul className="space-y-2.5">
                {techLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="group inline-flex items-center gap-1 text-sm text-foreground/75 hover:text-foreground transition-colors">
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:hello@iqra365.com" className="group flex items-start gap-2.5 text-foreground/75 hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span>hello@iqra365.com <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span></span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-foreground/75">
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>Available on request</span>
                </li>
                <li className="flex items-start gap-2.5 text-foreground/75">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>Global · Remote-first delivery</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Get a free consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-foreground/75">
            &copy; {currentYear} Iqra365 Cloud Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/75">
            <span className="hidden sm:inline text-border">|</span>
            <span>Microsoft Solutions Partner</span>
            <span className="text-border">|</span>
            <span>Azure</span>
            <span className="text-border">|</span>
            <span>Microsoft 365</span>
            <span className="text-border">|</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
