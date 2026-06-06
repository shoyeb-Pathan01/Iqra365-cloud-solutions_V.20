import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud, Users, Shield, Database, Zap, Code2,
  CheckCircle2, ExternalLink, type LucideIcon,
} from "lucide-react";
import { CTA } from "@/components/site/CTA";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies & Partners — Iqra365 Cloud Solutions" },
      { name: "description", content: "Microsoft Azure, M365, Entra ID, Defender, Sentinel, Intune, Power Platform and more — our full technology stack." },
      { property: "og:title", content: "Technologies & Partners — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Our Microsoft-centric technology stack & partner ecosystem with detailed capabilities." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

const techIconMap: Record<string, LucideIcon> = { Cloud, Users, Shield, Database, Zap, Code2 };

function TechPage() {
  const content = useContent();
  const tech = (content.technologies as Record<string, unknown>) ?? {};
  const categories = (tech.categories as Array<{ icon: string; name: string; desc: string; items: Array<{ name: string; desc: string }> }>) ?? [];
  const partners = (tech.partners as string[]) ?? [];

  return (
    <section className="pt-36 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="animate-fade-in-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Technologies</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            {(tech.page_title as string) ?? "Our tech stack"}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            {(tech.page_description as string) ?? "A modern, Microsoft-centric stack — battle-tested across regulated industries."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => {
            const CatIcon = techIconMap[c.icon] ?? Cloud;
            return <div
              key={c.name}
              className={`animate-fade-in-up animate-delay-${i * 60} glass rounded-2xl p-6 md:p-8`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CatIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {c.items.map((it) => (
                  <div key={it.name} className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-secondary/50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">{it.name}</span>
                      <span className="text-sm text-muted-foreground"> — {it.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>;
          })}
        </div>

        <div className="animate-fade-in-up glass rounded-2xl p-8 md:p-10 mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">{(tech.partners_heading as string) ?? "Microsoft Partner Accreditations"}</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            {(tech.partners_description as string) ?? "Our team holds active Microsoft Solutions Partner designations, validated annually through rigorous customer references and competency exams."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-secondary border border-border">
                <ExternalLink className="h-3 w-3 text-primary" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
