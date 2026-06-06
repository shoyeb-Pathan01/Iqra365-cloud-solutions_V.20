import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Cloud, Sparkles, type LucideIcon } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { useContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = { Cloud, Shield, Sparkles };

export function Hero() {
  const content = useContent();
  const hero = (content.hero as Record<string, unknown>) ?? {};
  const headline = (hero.headline as string[]) ?? ["Secure Cloud.", "Smarter Infrastructure.", "Future-Ready AI."];
  const features = (hero.features as Array<{ icon: string; label: string; value: string }>) ?? [];

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative">
        <div className="animate-fade-in-up max-w-4xl mx-auto text-center">
          <div className="animate-fade-in animate-delay-100 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium mb-6 sm:whitespace-nowrap">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {(hero.badge as string) ?? "Microsoft-focused Cloud, Security & AI Consultancy"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {headline[0]}<br className="sm:hidden" />
            <span className="text-gradient-brand">{headline[1]}</span><br className="sm:hidden" />
            {headline[2]}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {(hero.subheading as string) ?? "Iqra365 Cloud Solutions helps organizations modernize IT, strengthen cybersecurity, and accelerate digital transformation with Microsoft Azure, Microsoft 365, and intelligent security solutions."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-gradient-orange text-white border-0 shadow-glow-orange hover:opacity-95 group">
              <Link to="/contact">
                {(hero.cta_primary as string) ?? "Get Free Consultation"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30 hover:border-primary/60">
              <Link to="/services">
                {(hero.cta_secondary as string) ?? "Explore Services"}
              </Link>
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delay-400 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mt-16">
            {features.map((s) => {
              const Icon = iconMap[s.icon] ?? Cloud;
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
