import { ArrowUpRight, Shield, Smartphone, Bug, ScanEye, Cloud, Settings, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ServiceItem {
  slug: string;
  icon: keyof typeof svcIconMap;
  title: string;
  desc: string;
  gradient: string;
}

const svcIconMap = { Shield, Smartphone, Bug, ScanEye, Cloud, Settings };

const services: ServiceItem[] = [
  {
    slug: "entra-id",
    icon: "Shield",
    title: "Entra ID (Identity & Access)",
    desc: "Conditional Access policies, Privileged Identity Management, identity governance, and secure hybrid authentication for your Microsoft tenant.",
    gradient: "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
  },
  {
    slug: "intune",
    icon: "Smartphone",
    title: "Intune (Endpoint Management)",
    desc: "Mobile Device Management, Mobile Application Management, Windows Autopilot, and compliance policies for corporate and BYOD devices.",
    gradient: "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
  },
  {
    slug: "defender",
    icon: "Bug",
    title: "Microsoft Defender (Security)",
    desc: "Defender for Endpoint, Office 365, Identity, and Cloud Apps — threat detection, investigation, and response across your estate.",
    gradient: "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
  },
  {
    slug: "purview",
    icon: "ScanEye",
    title: "Microsoft Purview (DLP & Compliance)",
    desc: "Data Loss Prevention, information protection, insider risk management, audit, and compliance posture aligned with Indian regulations.",
    gradient: "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
  },
  {
    slug: "azure-sentinel",
    icon: "Cloud",
    title: "Azure & Sentinel (Cloud Security / SIEM)",
    desc: "Cloud security posture management, Log Analytics, Sentinel SIEM, and workload protection for Azure and hybrid environments.",
    gradient: "from-[oklch(0.42_0.24_200)] to-[oklch(0.55_0.24_190)]",
  },
  {
    slug: "m365-operations",
    icon: "Settings",
    title: "M365 Operations (Admin & Support)",
    desc: "Ongoing tenant administration, lifecycle management, license optimisation, and operational support on a retainer model.",
    gradient: "from-[oklch(0.42_0.20_280)] to-[oklch(0.55_0.20_270)]",
  },
];

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {heading && (
          <div className="animate-fade-in-up text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What we do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
              Six service areas. Microsoft-only.
            </h2>
            <p className="text-muted-foreground">
              We don't do generic IT. Every service is a Microsoft security, compliance, or cloud capability we work with daily in production environments.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = svcIconMap[s.icon];
            return (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                <div
                  className={`animate-fade-in-up animate-delay-${(i % 3) * 80} group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-elegant`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                  <div className="absolute inset-0 opacity-30 grid-bg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-32 sm:h-44 w-32 sm:w-44 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative h-full p-7 flex flex-col justify-between text-white">
                    <div className="inline-flex p-3 rounded-xl bg-white/15 backdrop-blur w-fit border border-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-white/85 mb-4">{s.desc}</p>
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
