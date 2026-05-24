import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iqra365 Cloud Solutions" },
      { name: "description", content: "From high-quality freelancing to enterprise cloud & security consultancy — our story, mission, and growth." },
      { property: "og:title", content: "About Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Our story, mission, and growth as a Microsoft-focused consultancy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2017", title: "Founded", desc: "Started as a specialist Microsoft 365 consultancy serving SMBs." },
  { year: "2020", title: "Azure Expansion", desc: "Scaled into Azure infrastructure & migration projects across regions." },
  { year: "2022", title: "Security Practice", desc: "Launched dedicated Defender, Sentinel & Zero Trust security practice." },
  { year: "2024", title: "Enterprise Scale", desc: "Trusted by enterprises in finance, healthcare, and manufacturing." },
  { year: "2026", title: "AI-Ready", desc: "Helping clients adopt Copilot, AI workloads & intelligent automation." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              An enterprise-ready <span className="text-gradient-brand">Microsoft partner</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Iqra365 Cloud Solutions evolved from a high-quality consulting boutique into a full-service enterprise cloud & cybersecurity firm. We specialize exclusively in the Microsoft ecosystem — bringing focus, depth, and accountability to every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <Stats />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Mission</h3>
              <p className="text-lg">Empower organizations to operate securely and intelligently in the cloud era — with Microsoft-grade architecture and human-grade partnership.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Vision</h3>
              <p className="text-lg">To be the most trusted Microsoft cloud & security partner for ambitious enterprises across emerging and mature markets.</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our growth timeline</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
              >
                <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow-azure" />
                <div className="glass rounded-2xl p-6 ml-12 md:ml-0">
                  <div className="text-sm font-bold text-primary">{m.year}</div>
                  <div className="font-semibold text-lg mt-1">{m.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
