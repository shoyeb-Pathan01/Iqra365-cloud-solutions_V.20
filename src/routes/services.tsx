import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Iqra365 Cloud Solutions" },
      { name: "description", content: "Entra ID, Intune, Microsoft Defender, Purview, Azure & Sentinel, M365 Operations — specialist Microsoft Security & Cloud services for Indian enterprises." },
      { property: "og:title", content: "Services — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Six specialist Microsoft Security & Cloud service areas." },
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
          <div className="animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              Microsoft security, <span className="text-gradient-brand">end to end</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Twelve specialist service areas — Microsoft-first, practitioner-led, and built on technologies we work with daily. Delivered as projects or ongoing retainers.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid heading={false} />
      <CTA />
    </>
  );
}
