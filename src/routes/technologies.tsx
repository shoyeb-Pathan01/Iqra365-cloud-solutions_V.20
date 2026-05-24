import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cloud, Users, Shield, Database, Zap, Code2,
  CheckCircle2, ExternalLink,
} from "lucide-react";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies & Partners — Iqra365 Cloud Solutions" },
      { name: "description", content: "Microsoft Azure, M365, Entra ID, Defender, Sentinel, Intune, Power Platform and more — our full technology stack." },
      { property: "og:title", content: "Technologies & Partners — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Our Microsoft-centric technology stack & partner ecosystem with detailed capabilities." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

const categories = [
  {
    icon: Cloud,
    name: "Cloud Platform",
    desc: "Enterprise-grade Azure infrastructure, DevOps pipelines, and hybrid cloud management.",
    items: [
      { name: "Microsoft Azure", desc: "Compute, storage, networking & landing zones" },
      { name: "Azure DevOps", desc: "CI/CD pipelines, repos & agile boards" },
      { name: "Azure Arc", desc: "Multi-cloud & hybrid management plane" },
      { name: "Azure Monitor", desc: "Full-stack observability & alerting" },
      { name: "Azure Functions", desc: "Serverless compute for event-driven apps" },
      { name: "AKS", desc: "Managed Kubernetes container orchestration" },
      { name: "Azure API Management", desc: "API gateway, publishing & lifecycle" },
    ],
  },
  {
    icon: Users,
    name: "Productivity & Modern Workplace",
    desc: "Collaboration, communication, and document management across your organization.",
    items: [
      { name: "Microsoft 365", desc: "Enterprise productivity & collaboration suite" },
      { name: "Microsoft Teams", desc: "Chat, meetings, VoIP & channel-based work" },
      { name: "SharePoint Online", desc: "Intranet, document management & portals" },
      { name: "Exchange Online", desc: "Cloud email, calendaring & compliance" },
      { name: "OneDrive for Business", desc: "Personal cloud storage & file sync" },
      { name: "Viva Engage", desc: "Employee comms & community platform" },
      { name: "Power BI", desc: "Interactive dashboards & business analytics" },
    ],
  },
  {
    icon: Shield,
    name: "Security & Identity",
    desc: "End-to-end protection with Microsoft's unified security stack and Zero Trust architecture.",
    items: [
      { name: "Microsoft Defender XDR", desc: "Extended detection & response across domains" },
      { name: "Microsoft Sentinel", desc: "Cloud-native SIEM + SOAR (built on Azure)" },
      { name: "Entra ID (Azure AD)", desc: "Identity, SSO, MFA & conditional access" },
      { name: "Microsoft Purview", desc: "Data governance, risk & compliance portal" },
      { name: "Microsoft Intune", desc: "MDM, MAM & endpoint configuration" },
      { name: "Privileged Identity Mgmt", desc: "JIT privileged access & access reviews" },
      { name: "Defender Cloud Apps", desc: "CASB for shadow IT & app governance" },
    ],
  },
  {
    icon: Database,
    name: "Data & AI",
    desc: "Intelligent data platforms, analytics, and AI services from Microsoft's portfolio.",
    items: [
      { name: "Azure OpenAI Service", desc: "GPT-4, GPT-4o models with enterprise SLAs" },
      { name: "Microsoft Copilot", desc: "AI assistant across M365, Dynamics & Fabric" },
      { name: "Azure AI Foundry", desc: "End-to-end AI development & deployment" },
      { name: "Microsoft Fabric", desc: "Unified analytics SaaS (Lakehouse, BI, AI)" },
      { name: "Azure Synapse Analytics", desc: "Big data & data warehousing engine" },
      { name: "Azure SQL / Cosmos DB", desc: "Relational & NoSQL managed databases" },
    ],
  },
  {
    icon: Zap,
    name: "Automation & DevOps",
    desc: "Infrastructure as Code, low-code automation, and intelligent orchestration.",
    items: [
      { name: "Power Platform", desc: "Low-code apps, automations & chatbots" },
      { name: "Power Automate", desc: "Workflow automation across 400+ services" },
      { name: "Logic Apps", desc: "Enterprise integration & API orchestration" },
      { name: "Azure Bicep", desc: "Declarative ARM infrastructure as code" },
      { name: "Terraform", desc: "Multi-cloud IaC (AWS, Azure, GCP)" },
      { name: "GitHub Actions", desc: "CI/CD automation integrated with Azure" },
      { name: "Docker / ACR", desc: "Containerisation & Azure Container Registry" },
    ],
  },
  {
    icon: Code2,
    name: "Development & Engineering",
    desc: "Modern frameworks, languages, and tools we use to build and ship reliable solutions.",
    items: [
      { name: "React / TypeScript", desc: "Component-driven UIs with type safety" },
      { name: ".NET / C#", desc: "Enterprise back-end & API development" },
      { name: "Node.js / Python", desc: "Server-side scripting & automation" },
      { name: "GitHub / GitLab", desc: "Version control, pull requests & reviews" },
      { name: "ESLint / Prettier", desc: "Automated code quality & formatting" },
      { name: "Playwright / Vitest", desc: "E2E testing & unit testing frameworks" },
      { name: "Bicep / ARM", desc: "Infrastructure as Code for Azure" },
    ],
  },
];

const partners = [
  "Microsoft Solutions Partner – Azure Infrastructure",
  "Microsoft Solutions Partner – Security",
  "Microsoft Solutions Partner – Modern Work",
  "Microsoft Solutions Partner – Data & AI (Azure)",
  "Microsoft Solutions Partner – Digital & App Innovation (Azure)",
];

function TechPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Technologies</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-brand">tech stack</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            A modern, Microsoft-centric stack — battle-tested across regulated industries. Every technology we deploy is covered by internal expertise and, where applicable, Microsoft partner accreditations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10 mt-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Microsoft Partner Accreditations</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Our team holds active Microsoft Solutions Partner designations, validated annually through rigorous customer references and competency exams.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-secondary border border-border">
                <ExternalLink className="h-3 w-3 text-primary" />
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <CTA />
    </section>
  );
}
