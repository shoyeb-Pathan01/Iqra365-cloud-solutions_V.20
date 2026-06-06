import { ArrowUpRight, Cloud, Shield, KeyRound, Server, HardDriveDownload, Laptop, Code2, MonitorCog, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useContent } from "@/lib/content";

const svcIconMap: Record<string, LucideIcon> = { Cloud, Shield, KeyRound, Server, HardDriveDownload, Laptop, Code2, MonitorCog };

const svcColorMap: Record<string, string> = {
  "microsoft-365-solutions": "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
  "azure-cloud-infrastructure": "from-[oklch(0.42_0.24_200)] to-[oklch(0.55_0.24_190)]",
  "cloud-migration": "from-[oklch(0.42_0.20_280)] to-[oklch(0.55_0.20_270)]",
  "cybersecurity-compliance": "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
  "identity-access-entra-id": "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
  "endpoint-security-intune": "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
  "backup-disaster-recovery": "from-[oklch(0.42_0.20_200)] to-[oklch(0.55_0.20_190)]",
  "web-application-development": "from-[oklch(0.42_0.24_320)] to-[oklch(0.55_0.24_310)]",
};

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  const content = useContent();
  const sg = (content.services_grid as Record<string, unknown>) ?? {};
  const services = (sg.services as Array<{ slug: string; icon: string; title: string; desc: string }>) ?? [];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {heading && (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{(sg.heading as string) ?? "What we do"}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              {(sg.title as string) ?? "Enterprise services, Microsoft-first"}
            </h2>
            <p className="text-muted-foreground">
              {(sg.description as string) ?? "End-to-end consultancy spanning cloud, security, identity, and modern workplace -- designed for scale and accountability."}
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = svcIconMap[s.icon] ?? Cloud;
            const gradient = svcColorMap[s.slug] ?? "from-primary/40 to-accent/40";
            return (
              <Link key={s.title} to="/services/$slug" params={{ slug: s.slug }}>
                <div
                  className={`animate-fade-in-up animate-delay-${(i % 3) * 80} group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-elegant`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                  <div className="absolute inset-0 opacity-30 grid-bg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-32 sm:h-44 w-32 sm:w-44 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative h-full p-7 flex flex-col justify-between text-white">
                    <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur w-fit border border-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-white/80 mb-4">{s.desc}</p>
                      <div className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                        Learn more <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
