import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { motion } from "framer-motion";
import {
  Cloud, ShieldCheck, Laptop, Database, Lock, Building2,
  CheckCircle2, ArrowRight, TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Iqra365 Cloud Solutions" },
      { name: "description", content: "Real outcomes from Azure migrations, Sentinel deployments, modern workplace rollouts, and more." },
      { property: "og:title", content: "Case Studies — Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Outcomes that scale: cloud migrations, SIEM, modern workplace, data platforms, and IAM." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const caseStudies = [
  {
    tag: "Cloud Migration",
    icon: Cloud,
    color: "from-[oklch(0.42_0.24_250)] to-[oklch(0.55_0.24_240)]",
    title: "Banking Group migrates to Azure Landing Zone",
    client: "Regional banking group — 3,000+ employees",
    challenge: "The bank's on-premises data centre was approaching end-of-life. Hardware refresh costs were prohibitive, and the existing environment lacked disaster recovery capabilities. Regulatory compliance (PCI-DSS, MAS TRM) added further complexity to any migration approach.",
    solution: "Designed and deployed a greenfield Azure Landing Zone aligned to the Microsoft Cloud Adoption Framework. Migrated 80+ workloads including core banking applications, SQL Server databases, and file services using Azure Migrate and a phased wave plan. Implemented Azure Site Recovery for DR and Azure Policy for guardrails.",
    results: [
      "30% reduction in total infrastructure cost",
      "Zero downtime during migration waves",
      "RTO reduced from 24 hours to 4 hours",
      "Automated compliance auditing via Azure Policy",
    ],
    tech: ["Azure Landing Zone", "Azure Migrate", "Azure Site Recovery", "Azure Policy", "Azure SQL"],
  },
  {
    tag: "Cybersecurity",
    icon: ShieldCheck,
    color: "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
    title: "Healthcare provider deploys Sentinel SIEM",
    client: "National healthcare provider — 8,000+ endpoints",
    challenge: "The organisation's legacy SIEM was reaching capacity and couldn't keep pace with modern threats. Security analysts spent most of their time on manual triage. Compliance reporting for HIPAA and local health data regulations required weeks of effort per quarter.",
    solution: "Deployed Microsoft Sentinel as a cloud-native SIEM with automated ingestion from Defender XDR, Entra ID, and line-of-business apps. Built SOAR playbooks to automate phishing response, user compromise isolation, and threat hunting queries. Integrated with existing ServiceNow for ticketing.",
    results: [
      "4x faster threat detection (mean time to detect)",
      "Automated 70% of Level-1 alert triage",
      "Compliance reporting reduced from 2 weeks to 2 days",
      "Cost savings of 40% vs legacy SIEM licensing",
    ],
    tech: ["Microsoft Sentinel", "Defender XDR", "Entra ID", "Logic Apps", "ServiceNow"],
  },
  {
    tag: "Modern Workplace",
    icon: Laptop,
    color: "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
    title: "Manufacturing firm onboards 2,000 users to M365",
    client: "Global manufacturing company — 2,000 employees across 12 sites",
    challenge: "The company operated on a mix of on-premises Exchange, file servers, and legacy VPN-based remote access. The CFO mandated a shift to cloud to reduce infrastructure overhead and enable hybrid work. User adoption was a key concern — past IT projects had met resistance.",
    solution: "Deployed Microsoft 365 E5 with Teams Voice, Exchange Online, and OneDrive. Used Intune with Autopilot for zero-touch device provisioning. Ran adoption workshops and created a Champions network across departments. Migrated SharePoint data with Sharegate and email with Exchange Hybrid.",
    results: [
      "Full rollout completed in 6 weeks",
      "99% user adoption within 30 days",
      "VPN dependency reduced by 85%",
      "IT helpdesk tickets down by 40%",
    ],
    tech: ["Microsoft 365 E5", "Teams Voice", "Intune", "Autopilot", "Sharegate"],
  },
  {
    tag: "Data Platform",
    icon: Database,
    color: "from-[oklch(0.42_0.20_280)] to-[oklch(0.55_0.20_270)]",
    title: "Retail analytics platform on Azure Synapse",
    client: "Omni-channel retailer — $500M annual revenue",
    challenge: "Sales, inventory, and customer data was scattered across multiple silos (on-prem SQL Server, Salesforce, Shopify, ERP). The leadership team needed a unified analytics view but quarterly reporting cycles made decision-making slow.",
    solution: "Built a cloud data platform on Azure Synapse Analytics with data ingestion pipelines via Azure Data Factory. Used Power BI Premium for executive dashboards and embedded analytics for store managers. Implemented a medallion architecture (bronze/silver/gold) for data governance.",
    results: [
      "Reporting cycle reduced from quarterly to daily",
      "Single source of truth across 6 data sources",
      "Inventory forecasting accuracy improved by 25%",
      "Power BI adoption across 200+ users",
    ],
    tech: ["Azure Synapse", "Data Factory", "Power BI Premium", "Azure Data Lake", "Azure SQL"],
  },
  {
    tag: "Identity & Access",
    icon: Lock,
    color: "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
    title: "Financial services firm adopts Zero Trust IAM",
    client: "Financial services firm — 1,200 employees, regulated globally",
    challenge: "The firm relied on legacy Active Directory with no MFA. A ransomware incident exposed critical gaps in identity security. The board required a Zero Trust architecture within 6 months to meet insurance and regulatory mandates.",
    solution: "Implemented Entra ID with PIM for just-in-time privileged access. Rolled out MFA and conditional access policies based on risk (location, device compliance, sign-in behaviour). Deployed Entra ID Governance for access reviews and automated identity lifecycle management. Integrated with 50+ SaaS apps via SSO.",
    results: [
      "Zero Trust model deployed in 5 months",
      "MFA coverage across all 1,200 users and 50+ apps",
      "Privileged accounts reduced by 60%",
      "Passed regulatory audit with zero findings",
    ],
    tech: ["Entra ID PIM", "Conditional Access", "MFA", "Entra ID Governance", "SSO"],
  },
  {
    tag: "Backup & DR",
    icon: Building2,
    color: "from-[oklch(0.42_0.20_200)] to-[oklch(0.55_0.20_190)]",
    title: "Logistics company modernises BCDR strategy",
    client: "Logistics & supply chain company — 1,500 employees, 24/7 operations",
    challenge: "Backups ran on tape-based systems with no off-site copies. A successful restore had never been tested. Leadership was concerned about ransomware resilience after industry-wide attacks. Recovery time objectives (RTOs) were measured in days, not hours.",
    solution: "Deployed Azure Backup for VMs, SQL Server, and file shares with off-site vault storage. Configured Azure Site Recovery for failover to a secondary Azure region. Built a runbook for quarterly DR drills with automated reporting. Deployed MARS agent for on-premises file and folder protection.",
    results: [
      "RTO reduced from 48 hours to 4 hours",
      "Tape infrastructure decommissioned",
      "Quarterly DR drills now automated with pass/fail reporting",
      "40% reduction in backup management overhead",
    ],
    tech: ["Azure Backup", "Azure Site Recovery", "MARS Agent", "Recovery Vault", "Azure Monitor"],
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="pt-36 pb-4">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Real impact, <span className="text-gradient-brand">measurable results</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed engagements across cloud migration, cybersecurity, modern workplace, data analytics, identity, and business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="glass rounded-3xl overflow-hidden shadow-elegant">
                <div className={`bg-gradient-to-br ${cs.color} p-6 md:p-8 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                      <cs.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-2">
                        {cs.tag}
                      </span>
                      <h2 className="text-lg md:text-2xl font-bold break-words">{cs.title}</h2>
                      <p className="text-sm text-white/80 mt-1">{cs.client}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        Challenge
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        Solution
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Results
                      </h3>
                      <ul className="space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-brand shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {cs.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
