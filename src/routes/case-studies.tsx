import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import {
  Cloud, ShieldCheck, Laptop, Database, Lock, Building2,
  CheckCircle2, ArrowRight, TrendingUp, type LucideIcon,
} from "lucide-react";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies - Iqra365 Cloud Solutions" },
      { name: "description", content: "Real outcomes from Azure migrations, Sentinel deployments, modern workplace rollouts, and more." },
      { property: "og:title", content: "Case Studies - Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Outcomes that scale: cloud migrations, SIEM, modern workplace, data platforms, and IAM." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const csIconMap: Record<string, LucideIcon> = { Cloud, ShieldCheck, Laptop, Database, Lock, Building2 };

function CaseStudiesPage() {
  const content = useContent();
  const caseStudies = (content.case_studies_full as Array<{
    tag: string; icon: string; color: string; slug: string; title: string; client: string;
    challenge: string; solution: string; results: string[]; tech: string[];
  }>) ?? [];

  return (
    <>
      <section className="pt-36 pb-4">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Real impact, <span className="text-gradient-brand">measurable results</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed engagements across cloud migration, cybersecurity, modern workplace, data analytics, identity, and business continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          {caseStudies.map((cs, i) => {
            const Ci = csIconMap[cs.icon] ?? Cloud;
            return <article
              key={cs.title}
              className={`animate-fade-in-up animate-delay-${i * 80}`}
            >
              <Link to="/case-studies/$slug" params={{ slug: cs.slug }} className="block group">
                <div className="glass rounded-3xl overflow-hidden shadow-elegant">
                  <div className={`bg-gradient-to-br ${cs.color} p-6 md:p-8 text-white`}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                        <Ci className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-2">
                          {cs.tag}
                        </span>
                        <h2 className="text-lg md:text-2xl font-bold break-words">{cs.title}</h2>
                        <p className="text-sm text-white/80 mt-1">{cs.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          Challenge
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          Solution
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Results
                        </h3>
                        <ul className="space-y-1.5">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-green-brand shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                      {cs.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-primary group-hover:underline">
                        Read full case study &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </article>;
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
