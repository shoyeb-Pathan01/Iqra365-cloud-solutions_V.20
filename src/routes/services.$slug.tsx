import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, Shield, Smartphone, Bug, ScanEye, Cloud, Settings, type LucideIcon } from "lucide-react";
import { CTA } from "@/components/site/CTA";

const services = [
  {
    slug: "entra-id",
    icon: "Shield",
    title: "Entra ID (Identity & Access)",
    details: "Identity is the new perimeter. We design and implement Entra ID (formerly Azure AD) configurations that balance security with user productivity — Conditional Access policies, Privileged Identity Management, identity governance, and secure hybrid authentication. Every policy is scoped to your specific risk profile and operational needs.",
    capabilities: [
      "Conditional Access policy design and implementation",
      "Privileged Identity Management (PIM) configuration",
      "Identity governance, access reviews, and entitlement management",
      "Hybrid identity with Entra Connect / Cloud Sync",
      "Passwordless and multi-factor authentication rollouts",
      "Application registration and enterprise app governance",
    ],
    useCases: [
      "Securing remote access for a 200-user organisation",
      "JIT privileged access for IT admins and vendors",
      "DPDP Act identity governance readiness assessment",
      "Migration from legacy AD to cloud-native identity",
    ],
    gradient: "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
  },
  {
    slug: "intune",
    icon: "Smartphone",
    title: "Intune (Endpoint Management)",
    details: "Manage and secure every device that accesses your corporate data — whether company-owned or BYOD. We configure Intune policies for device compliance, application management, Windows Autopilot, and conditional access integration, ensuring end-to-end endpoint governance without hindering user productivity.",
    capabilities: [
      "Mobile Device Management (MDM) for corporate and personal devices",
      "Mobile Application Management (MAM) with app protection policies",
      "Windows Autopilot deployment and device provisioning",
      "Compliance policy frameworks and health reporting",
      "Configuration profiles and custom baselines",
      "Integration with Defender for Endpoint for risk-based access",
    ],
    useCases: [
      "BYOD policy deployment for a 150-user sales team",
      "Zero-touch provisioning for a new hardware refresh cycle",
      "Endpoint compliance for ISO 27001 audit readiness",
    ],
    gradient: "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
  },
  {
    slug: "defender",
    icon: "Bug",
    title: "Microsoft Defender (Security Suite)",
    details: "Detection and response across your entire Microsoft estate. We deploy and tune Defender for Endpoint, Office 365, Identity, and Cloud Apps — ensuring threat visibility, automated response playbooks, and continuous posture improvement. Configurations are aligned to industry benchmarks and your specific threat model.",
    capabilities: [
      "Defender for Endpoint deployment and tuning",
      "Defender for Office 365 (anti-phishing, safe links/attachments)",
      "Defender for Identity (on-prem AD threat detection)",
      "Defender for Cloud Apps (SaaS discovery and governance)",
      "Attack surface reduction rules and ASR reporting",
      "Automated investigation and response (AIR) playbooks",
    ],
    useCases: [
      "Post-breach security hardening for a mid-market enterprise",
      "Ransomware readiness assessment and defence deployment",
      "Email security overhaul for a financial services firm",
    ],
    gradient: "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
  },
  {
    slug: "purview",
    icon: "ScanEye",
    title: "Microsoft Purview (DLP & Compliance)",
    details: "Data protection and compliance are no longer optional for Indian enterprises. We implement Microsoft Purview solutions for Data Loss Prevention, information protection (sensitivity labels), insider risk management, and compliance posture — mapped to DPDP Act requirements, RBI guidelines, and ISO 27001 controls.",
    capabilities: [
      "Data Loss Prevention policy design and deployment",
      "Sensitivity labels and automatic classification",
      "Insider Risk Management policies and analytics",
      "eDiscovery and legal hold configuration",
      "Audit log management and retention policies",
      "Compliance posture assessment and remediation roadmap",
    ],
    useCases: [
      "DPDP Act data protection compliance project",
      "RBI-mandated information protection for a NBFC",
      "Insider risk monitoring for a 300-user professional services firm",
    ],
    gradient: "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
  },
  {
    slug: "azure-sentinel",
    icon: "Cloud",
    title: "Azure & Sentinel (Cloud Security / SIEM)",
    details: "Cloud security posture management and intelligent threat monitoring. We architect and deploy Azure security services including Microsoft Sentinel (cloud-native SIEM), Defender for Cloud, Log Analytics, and Azure Policy — giving your security team the visibility and automation needed to detect and respond to threats across hybrid and multi-cloud environments.",
    capabilities: [
      "Microsoft Sentinel deployment (data connectors, analytics rules)",
      "Defender for Cloud (CSPM and workload protection)",
      "Log Analytics workspaces and KQL query development",
      "Azure Policy and regulatory compliance initiatives",
      "SOAR playbook automation for incident response",
      "Threat intelligence feed integration",
    ],
    useCases: [
      "Security operations centre build for a mid-market enterprise",
      "Compliance monitoring for ISO 27001 and RBI guidelines",
      "Cloud workload protection for Azure-migrated applications",
    ],
    gradient: "from-[oklch(0.42_0.24_200)] to-[oklch(0.55_0.24_190)]",
  },
  {
    slug: "m365-operations",
    icon: "Settings",
    title: "M365 Operations (Admin & Support)",
    details: "Ongoing Microsoft 365 tenant administration and operational support delivered on a transparent monthly retainer. We manage user lifecycle, Exchange Online, SharePoint, Teams, licensing, and security configuration — giving your internal IT team the specialist backup they need without hiring full-time Microsoft experts.",
    capabilities: [
      "Tenant administration (users, groups, licenses, domains)",
      "Exchange Online management (mail flow, hygiene, retention)",
      "SharePoint Online and OneDrive governance",
      "Teams configuration and lifecycle management",
      "License optimisation and cost management",
      "Monthly security health reviews and recommendations",
    ],
    useCases: [
      "Ongoing M365 support for an IT team of two",
      "Post-merger tenant consolidation and governance",
      "License audit and optimisation for a growing company",
    ],
    gradient: "from-[oklch(0.42_0.20_280)] to-[oklch(0.55_0.20_270)]",
  },
];

const iconMap: Record<string, LucideIcon> = { Shield, Smartphone, Bug, ScanEye, Cloud, Settings };

const gradientMap = Object.fromEntries(services.map(s => [s.slug, s.gradient]));

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const svc = services.find(s => s.slug === params.slug);
    return {
      meta: [
        { title: `${svc?.title ?? "Service"} — Iqra365 Cloud Solutions` },
        { name: "description", content: svc?.details ?? "Service detail page" },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) throw notFound();

  const Icon = iconMap[service.icon] ?? Shield;
  const gradient = gradientMap[service.slug] ?? "from-primary/40 to-accent/40";

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
