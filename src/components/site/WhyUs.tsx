import { Award, Zap, ShieldCheck, HandshakeIcon, TrendingDown, Users, type LucideIcon } from "lucide-react";
import { useContent } from "@/lib/content";

const whyIconMap: Record<string, LucideIcon> = { Award, ShieldCheck, HandshakeIcon, Zap, TrendingDown, Users };

export function WhyUs() {
  const content = useContent();
  const wu = (content.why_us as Record<string, unknown>) ?? {};
  const items = (wu.items as Array<{ icon: string; title: string; desc: string }>) ?? [];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{(wu.heading as string) ?? "Why Iqra365"}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {(wu.title as string) ?? "Built for enterprise trust"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = whyIconMap[it.icon] ?? Award;
            return (
              <div
                key={it.title}
                className={`animate-fade-in-up animate-delay-${i * 60} glass rounded-2xl p-6 hover:border-primary/40 transition-colors`}
              >
                <Icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}