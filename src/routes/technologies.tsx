import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud, Users, Shield, ScanEye, Bug, Settings,
  CheckCircle2, type LucideIcon,
} from "lucide-react";
import { CTA } from "@/components/site/CTA";

const techIconMap: Record<string, LucideIcon> = { Cloud, Users, Shield, ScanEye, Bug, Settings };

const categories = [
  {
    icon: "Shield",
    name: "Entra ID",
    desc: "Identity & Access Management",
    items: [
      { name: "Conditional Access", desc: "Policy-driven access controls" },
      { name: "Privileged Identity Management", desc: "Just-in-time privileged access" },
      { name: "Identity Governance", desc: "Access reviews and entitlements" },
      { name: "Hybrid Identity", desc: "Sync and federation" },
    ],
  },
  {
    icon: "Settings",
    name: "Microsoft Intune",
    desc: "Endpoint Management",
    items: [
      { name: "Mobile Device Management", desc: "Corporate and BYOD device enrolment" },
      { name: "Mobile Application Management", desc: "App protection policies" },
      { name: "Windows Autopilot", desc: "Zero-touch device provisioning" },
      { name: "Compliance Policies", desc: "Device health and configuration baselines" },
    ],
  },
  {
    icon: "Bug",
    name: "Microsoft Defender",
    desc: "Security Suite",
    items: [
      { name: "Defender for Endpoint", desc: "EDR and endpoint protection" },
      { name: "Defender for Office 365", desc: "Email and collaboration security" },
      { name: "Defender for Identity", desc: "On-prem identity threat detection" },
      { name: "Defender for Cloud Apps", desc: "SaaS shadow IT and threat protection" },
    ],
  },
  {
    icon: "ScanEye",
    name: "Microsoft Purview",
    desc: "Data Security & Compliance",
    items: [
      { name: "Data Loss Prevention", desc: "Content and context-aware DLP" },
      { name: "Information Protection", desc: "Sensitivity labels and encryption" },
      { name: "Insider Risk Management", desc: "User activity analytics" },
      { name: "Audit & eDiscovery", desc: "Compliance search and legal hold" },
    ],
  },
  {
    icon: "Cloud",
    name: "Azure & Microsoft Sentinel",
    desc: "Cloud Security & SIEM",
    items: [
      { name: "Microsoft Sentinel", desc: "Cloud-native SIEM and SOAR" },
      { name: "Defender for Cloud", desc: "Cloud security posture management" },
      { name: "Log Analytics", desc: "Centralised logging and monitoring" },
      { name: "Azure Policy", desc: "Resource governance and compliance" },
    ],
  },
  {
    icon: "Users",
    name: "Microsoft 365 Operations",
    desc: "Admin & Lifecycle Support",
    items: [
      { name: "Tenant Administration", desc: "User, group, and license management" },
      { name: "Exchange Online", desc: "Mail flow, hygiene, and configuration" },
      { name: "SharePoint & OneDrive", desc: "Site governance and permissions" },
      { name: "Lifecycle Management", desc: "Onboarding, offboarding, and retention" },
    ],
  },
];

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Iqra365 Cloud Solutions" },
      { name: "description", content: "Microsoft Entra ID, Intune, Defender, Purview, Azure Sentinel, and M365 — our full Microsoft technology stack." },
      { property: "og:title", content: "Technologies — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Our Microsoft-centric technology stack." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="animate-fade-in-up text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Technologies</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Our Microsoft stack
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Six Microsoft technology areas we work with daily. Every tool, every configuration — deployed from real production experience, not certification alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => {
            const CatIcon = techIconMap[c.icon] ?? Cloud;
            return <div
              key={c.name}
              className={`animate-fade-in-up animate-delay-${i * 60} glass rounded-2xl p-6 md:p-8`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CatIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {c.items.map((it) => (
                  <div key={it.name} className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-secondary/50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">{it.name}</span>
                      <span className="text-sm text-muted-foreground"> — {it.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>;
          })}
        </div>
      </div>
      <CTA />
    </section>
  );
}
