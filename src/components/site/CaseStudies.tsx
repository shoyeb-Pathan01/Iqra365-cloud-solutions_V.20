import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, ShieldCheck, Laptop } from "lucide-react";

const cases = [
  {
    tag: "Cloud Migration",
    title: "Banking Group → Azure Landing Zone",
    metric: "30% cost reduction · Zero downtime",
    color: "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
    Icon: Cloud,
  },
  {
    tag: "Cybersecurity",
    title: "Healthcare SIEM with Microsoft Sentinel",
    metric: "4x faster threat detection",
    color: "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
    Icon: ShieldCheck,
  },
  {
    tag: "Modern Workplace",
    title: "2,000 users onboarded to M365 + Intune",
    metric: "6-week rollout · 99% adoption",
    color: "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
    Icon: Laptop,
  },
];

export function CaseStudies() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Outcomes that <span className="text-gradient-brand">scale</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of recent engagements across regulated and high-growth enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[4/5] cursor-pointer shadow-elegant"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
              <div className="absolute inset-0 opacity-30 grid-bg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <c.Icon className="h-32 sm:h-56 w-32 sm:w-56 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
