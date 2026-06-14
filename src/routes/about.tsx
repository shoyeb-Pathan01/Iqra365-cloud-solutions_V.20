import { createFileRoute } from "@tanstack/react-router";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iqra365 Cloud Solutions" },
      { name: "description", content: "Founded in 2026 by Shoyeb Khan and co-founder Musheer Hashmi — two certified Microsoft 365 practitioners. Specialist Microsoft Security & Cloud consultancy for Indian mid-market companies." },
      { property: "og:title", content: "About Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Our founding story, mission, and vision as a Microsoft Security & Cloud consultancy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              Two practitioners, <span className="text-gradient-brand">one mission</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Iqra365 Cloud Solutions was founded in 2026 by Shoyeb Khan and co-founder Musheer Hashmi. 
              Both are certified Microsoft 365 practitioners working hands-on in production environments every day. 
              We started this company because we saw a gap: Indian mid-market companies with 50–500 users were caught 
              between expensive global consultancies and generic IT providers who didn't understand the Microsoft ecosystem deeply enough.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Mission</h3>
              <p className="text-lg">Make enterprise-grade Microsoft security accessible and sustainable for Indian mid-market companies — without the big-firm price tag.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Why now</h3>
              <p className="text-lg">India's DPDP Act, evolving RBI cybersecurity guidelines, and ISO 27001 audit requirements are creating urgent demand for specialist Microsoft security expertise. We're built to meet it.</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <div className="animate-fade-in-up relative mb-8 md:w-1/2 md:pr-12">
              <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow-azure" />
              <div className="glass rounded-2xl p-6 ml-12 md:ml-0">
                <div className="text-sm font-bold text-primary">Before 2026</div>
                <div className="font-semibold text-lg mt-1">Years of production experience</div>
                <p className="text-sm text-muted-foreground mt-1">Both founders built their careers deploying and managing Microsoft 365, Entra ID, Intune, Defender, and Azure for Indian enterprises — as practitioners, not consultants.</p>
              </div>
            </div>
            <div className="animate-fade-in-up relative mb-8 md:w-1/2 md:pl-12 md:ml-auto">
              <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow-azure" />
              <div className="glass rounded-2xl p-6 ml-12 md:ml-0">
                <div className="text-sm font-bold text-primary">2026</div>
                <div className="font-semibold text-lg mt-1">Iqra365 Cloud Solutions founded</div>
                <p className="text-sm text-muted-foreground mt-1">Shoyeb and Musheer launch Iqra365 to bring specialist Microsoft security and cloud expertise directly to Indian mid-market companies — with a transparent, practitioner-led approach.</p>
              </div>
            </div>
            <div className="animate-fade-in-up relative mb-8 md:w-1/2 md:pr-12">
              <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow-azure" />
              <div className="glass rounded-2xl p-6 ml-12 md:ml-0">
                <div className="text-sm font-bold text-primary">Today & beyond</div>
                <div className="font-semibold text-lg mt-1">Building our first client relationships</div>
                <p className="text-sm text-muted-foreground mt-1">We're actively engaging with Indian companies navigating DPDP Act compliance, Microsoft security hardening, and cloud optimisation. Our first case studies will be published with client consent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
