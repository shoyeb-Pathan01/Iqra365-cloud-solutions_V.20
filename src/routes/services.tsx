import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTA } from "@/components/site/CTA";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Iqra365 Cloud Solutions" },
      { name: "description", content: "Azure, Microsoft 365, cloud migration, cybersecurity, Entra ID, Intune, BCDR, and IT strategy consulting." },
      { property: "og:title", content: "Services — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "End-to-end Microsoft cloud & security consultancy." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              Full-stack <span className="text-gradient-brand">Microsoft consultancy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Strategy, architecture, deployment and managed operations — under one accountable partner.
            </p>
          </motion.div>
        </div>
      </section>
      <ServicesGrid heading={false} />
      <CTA />
    </>
  );
}
