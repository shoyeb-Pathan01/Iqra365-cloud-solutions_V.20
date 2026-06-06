import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle2, Quote, Cloud, ShieldCheck, Laptop, Database, Lock, Building2, type LucideIcon } from "lucide-react";
import { useContent } from "@/lib/content";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case Study -- Iqra365 Cloud Solutions` },
      { name: "description", content: "Detailed case study with client challenge, solution, results, and feedback." },
    ],
  }),
  component: CaseStudyDetailPage,
});

const csIconMap: Record<string, LucideIcon> = { Cloud, ShieldCheck, Laptop, Database, Lock, Building2 };

function CaseStudyDetailPage() {
  const { slug } = Route.useParams();
  const content = useContent();
  const caseStudies = (content.case_studies_full as Array<{
    tag: string; icon: string; color: string; title: string; client: string;
    challenge: string; solution: string; results: string[]; tech: string[];
    feedback?: { quote: string; author: string; company: string };
  }>) ?? [];
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) throw notFound();

  const Icon = csIconMap[cs.icon] ?? Cloud;

  return (
    <>
      <section className="pt-36 pb-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>

          <div className="animate-fade-in-up">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cs.color} text-white mb-6`}>
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{cs.tag}</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-3">{cs.title}</h1>
            <p className="text-muted-foreground">{cs.client}</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-elegant space-y-10">
            <div className="animate-fade-in-up">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <ArrowRight className="h-5 w-5 text-primary" /> Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <ArrowRight className="h-5 w-5 text-primary" /> Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <TrendingUp className="h-5 w-5 text-primary" /> Results
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                    <CheckCircle2 className="h-5 w-5 text-green-brand shrink-0 mt-0.5" />
                    <span className="text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="text-lg font-semibold mb-3">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>

            {cs.feedback && (
              <div className="animate-fade-in-up border-t border-border pt-8">
                <h2 className="text-lg font-semibold mb-4">Client Feedback</h2>
                <div className="glass rounded-2xl p-6 md:p-8 relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 left-4" />
                  <p className="text-base md:text-lg italic text-muted-foreground leading-relaxed relative z-10 pl-4">
                    "{cs.feedback.quote}"
                  </p>
                  <div className="mt-4 pl-4">
                    <div className="font-semibold text-sm">{cs.feedback.author}</div>
                    <div className="text-xs text-muted-foreground">{cs.feedback.company}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
