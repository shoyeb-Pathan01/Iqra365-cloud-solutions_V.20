import { motion } from "framer-motion";
import { Award, Zap, ShieldCheck, HandshakeIcon, TrendingDown, Users } from "lucide-react";

const items = [
  { icon: Award, title: "Microsoft-Centric Expertise", desc: "Deep specialization in Azure, M365, Defender, Sentinel, Entra & Intune." },
  { icon: ShieldCheck, title: "Security-First Architecture", desc: "Every design begins with Zero Trust principles and compliance baselines." },
  { icon: HandshakeIcon, title: "End-to-End Accountability", desc: "From assessment to operations — single partner, single point of ownership." },
  { icon: Zap, title: "Rapid Deployment & Support", desc: "Proven playbooks deliver measurable outcomes in weeks, not quarters." },
  { icon: TrendingDown, title: "Cost Optimization Focus", desc: "FinOps-led design ensures Azure & M365 spend stays predictable." },
  { icon: Users, title: "Long-term Partnership", desc: "We grow with you — strategic advisory beyond the initial project." },
];

export function WhyUs() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Why Iqra365</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Built for <span className="text-gradient-brand">enterprise trust</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <it.icon className="h-6 w-6 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
