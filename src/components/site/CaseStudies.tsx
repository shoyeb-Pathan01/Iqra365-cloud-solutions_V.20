import { ArrowUpRight, Cloud, ShieldCheck, Laptop, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useContent } from "@/lib/content";

const chIconMap: Record<string, LucideIcon> = { Cloud, ShieldCheck, Laptop };

export function CaseStudies() {
  const content = useContent();
  const cases = (content.case_studies_home as Array<{ tag: string; slug: string; title: string; metric: string; color: string; icon: string }>) ?? [];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Outcomes that <span className="text-gradient-brand">scale</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of recent engagements across regulated and high-growth enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => {
            const Icon = chIconMap[c.icon] ?? Cloud;
            return (
              <Link key={c.title} to="/case-studies/$slug" params={{ slug: c.slug }}>
                <article
                  className={`animate-fade-in-up animate-delay-${i * 100} group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[4/5] cursor-pointer shadow-elegant`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
                  <div className="absolute inset-0 opacity-30 grid-bg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-32 sm:h-56 w-32 sm:w-56 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative h-full p-7 flex flex-col justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] bg-white/15 backdrop-blur px-3 py-1 rounded-full">
                        {c.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                      <p className="text-sm text-white mb-4">{c.metric}</p>
                      <div className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                        Read story <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
