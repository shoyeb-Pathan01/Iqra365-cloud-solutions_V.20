import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Linkedin, Mail, MapPin, Phone, ArrowUpRight, ArrowRight } from "lucide-react";

const serviceLinks = [
  { to: "/services/$slug", params: { slug: "entra-id" }, label: "Entra ID (Identity & Access)" },
  { to: "/services/$slug", params: { slug: "intune" }, label: "Intune (Endpoint Management)" },
  { to: "/services/$slug", params: { slug: "defender" }, label: "Microsoft Defender" },
  { to: "/services/$slug", params: { slug: "purview" }, label: "Microsoft Purview (DLP)" },
  { to: "/services/$slug", params: { slug: "azure-sentinel" }, label: "Azure & Sentinel" },
  { to: "/services/$slug", params: { slug: "m365-operations" }, label: "M365 Operations" },
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
              <p className="text-foreground/85 text-sm leading-relaxed max-w-sm">
                Specialist Microsoft Security & Cloud consultancy serving mid-market companies worldwide. Founded 2026 by certified M365 practitioners.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.linkedin.com/company/iqra365" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass hover:bg-primary/20 hover:shadow-glow-azure transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:Info@iqra365cloudsolutions.com" className="p-2.5 rounded-xl glass hover:bg-primary/20 hover:shadow-glow-azure transition-all" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Services</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} params={l.params} className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors">
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors">
                    About
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors">
                    Services
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/technologies" className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors">
                    Technologies
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="group inline-flex items-center gap-1 text-sm text-foreground/85 hover:text-foreground transition-colors">
                    Contact
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:Info@iqra365cloudsolutions.com" className="group flex items-start gap-2.5 text-foreground/85 hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span>Info@iqra365cloudsolutions.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-foreground/85">
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>Available on request</span>
                </li>
                <li className="flex items-start gap-2.5 text-foreground/85">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>Serving clients worldwide</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Free 30-min consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-foreground/85">
            &copy; {currentYear} Iqra365 Cloud Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/85">
            <span>Founded 2026</span>
            <span className="text-border">|</span>
            <span>Global delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
