import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, Cloud, Shield, KeyRound, Server, HardDriveDownload, Laptop, Code2, MonitorCog, type LucideIcon } from "lucide-react";
import { useContent } from "@/lib/content";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} -- Iqra365 Cloud Solutions` },
      { name: "description", content: "Detailed service overview, capabilities, and use cases." },
    ],
  }),
  component: ServiceDetailPage,
});

const iconMap: Record<string, LucideIcon> = { Cloud, Shield, KeyRound, Server, HardDriveDownload, Laptop, Code2, MonitorCog };

const colorMap: Record<string, string> = {
  "microsoft-365-solutions": "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
  "azure-cloud-infrastructure": "from-[oklch(0.42_0.24_200)] to-[oklch(0.55_0.24_190)]",
  "cloud-migration": "from-[oklch(0.42_0.20_280)] to-[oklch(0.55_0.20_270)]",
  "cybersecurity-compliance": "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
  "identity-access-entra-id": "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
  "endpoint-security-intune": "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
  "backup-disaster-recovery": "from-[oklch(0.42_0.20_200)] to-[oklch(0.55_0.20_190)]",
  "web-application-development": "from-[oklch(0.42_0.24_320)] to-[oklch(0.55_0.24_310)]",
};

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const content = useContent();
  const sg = (content.services_grid as Record<string, unknown>) ?? {};
  const services = (sg.services as Array<{ slug: string; icon: string; title: string; desc: string; details: string; capabilities: string[]; useCases: string[] }>) ?? [];
  const service = services.find((s) => s.slug === slug);

  if (!service) throw notFound();

  const Icon = iconMap[service.icon] ?? Cloud;
  const gradient = colorMap[service.slug] ?? "from-primary/40 to-accent/40";

  return (
    <>
      <section className="pt-36 pb-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>

          <div className="animate-fade-in-up">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6`}>
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.details}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Capabilities</h2>
              <ul className="space-y-3">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-brand shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
              <ul className="space-y-3">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-brand shrink-0 mt-0.5" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
