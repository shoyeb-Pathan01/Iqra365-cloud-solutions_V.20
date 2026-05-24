import { motion } from "framer-motion";
import {
  Cloud, Shield, KeyRound, Server, HardDriveDownload,
  Laptop, Brain, Code2, MonitorCog, ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const services = [
  { icon: Cloud, title: "Microsoft 365 Solutions", desc: "Modern workplace deployment, Teams, SharePoint, Exchange Online, governance & adoption." },
  { icon: Server, title: "Azure Cloud Infrastructure", desc: "Architecture, landing zones, IaaS/PaaS, networking, scaling & cost optimization." },
  { icon: MonitorCog, title: "Cloud Migration", desc: "On-prem → Cloud and Cloud → Cloud migrations with zero-downtime strategies." },
  { icon: Shield, title: "Cybersecurity & Compliance", desc: "Microsoft Defender, Sentinel SIEM/SOAR, compliance frameworks & threat hunting." },
  { icon: KeyRound, title: "Identity & Access (Entra ID)", desc: "Zero Trust identity, conditional access, MFA, privileged identity management." },
  { icon: Laptop, title: "Endpoint Security & Intune", desc: "MDM, MAM, autopilot, endpoint hardening & compliance policies." },
  { icon: HardDriveDownload, title: "Backup & Disaster Recovery", desc: "Azure Backup, Site Recovery, BCDR planning and tested restore procedures." },
  { icon: Brain, title: "IT Strategy Consulting", desc: "Cloud roadmaps, governance, FinOps, and digital transformation advisory." },
  { icon: Code2, title: "Web & Application Development", desc: "Custom apps, Power Platform automations & modern web — delivered via vetted partners." },
];

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What we do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              Enterprise services, <span className="text-gradient-brand">Microsoft-first</span>
            </h2>
            <p className="text-muted-foreground">
              End-to-end consultancy spanning cloud, security, identity, and modern workplace — designed for scale and accountability.
            </p>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 hover:shadow-glow-azure transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-brand/10 border border-primary/20 mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Discuss this <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
