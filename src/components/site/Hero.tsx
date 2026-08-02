import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Users, Building2 } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

const features = [
  { icon: Building2, label: "Mid-market focus", value: "Companies with 50–500 users on M365 Business Premium / E3 / E5" },
  { icon: Shield, label: "Compliance-ready", value: "GDPR, ISO 27001, and sector-specific frameworks" },
  { icon: Users, label: "Multilingual delivery", value: "Co-founder fluency in Arabic and English for clients worldwide" },
];

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative">
        <div className="animate-fade-in-up max-w-4xl mx-auto text-center">
          <div className="animate-fade-in animate-delay-100 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs sm:text-sm font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Microsoft Security & Cloud Consultancy — Founded 2026
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Specialist Microsoft Security.<br className="sm:hidden" />
            <span className="text-gradient-brand"> For enterprises worldwide.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Two certified M365 practitioners — Shoyeb Khan and Musheer Hashmi — helping companies with 50–500 users worldwide secure and optimise their Microsoft environments. No generic IT. No inflated claims. Just deep, daily expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-gradient-orange text-white border-0 shadow-glow-orange hover:opacity-95 group">
              <Link to="/contact">
                Free 30-Min Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30 hover:border-primary/60">
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delay-400 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mt-16">
            {features.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="glass rounded-xl p-4 md:p-5 text-left"
                >
                  <Icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="font-semibold text-sm md:text-base">{s.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
