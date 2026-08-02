import { Quote, Award, Globe } from "lucide-react";

const MicrosoftIcon = () => (
  <svg viewBox="0 0 23 23" className="h-3 w-3 shrink-0" aria-hidden="true">
    <path fill="#F25022" d="M1 1h10v10H1z" />
    <path fill="#7FBA00" d="M12 1h10v10H12z" />
    <path fill="#00A4EF" d="M1 12h10v10H1z" />
    <path fill="#FFB900" d="M12 12h10v10H12z" />
  </svg>
);

const founders = [
  {
    name: "Shoyeb Khan",
    role: "Co-Founder & Microsoft Security Practitioner",
    certs: [
      "Microsoft 365 Certified: Administrator Expert",
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      "SC-300: Microsoft Certified – Identity and Access Administrator Associate",
      "MD-102: Microsoft Certified – Endpoint Administrator Associate",
      "SC-401: Microsoft Certified – Information Security Administrator Associate",
      "SC-200: Microsoft Certified – Security Operations Analyst Associate",
    ],
    bio: "Shoyeb has been working hands-on with Microsoft 365 and Azure security since the beginning of his career. He specialises in Entra ID, Conditional Access, Defender for Endpoint, and Intune — designing and deploying production environments for enterprises worldwide. He founded Iqra365 Cloud Solutions to bring enterprise-grade Microsoft security within reach of mid-market companies.",
    avatar: null,
  },
  {
    name: "Musheer Hashmi",
    role: "Co-Founder & M365 Operations Lead",
    certs: [
      "Microsoft 365 Certified: Administrator Expert",
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    ],
    bio: "Musheer brings deep operational expertise in Microsoft 365 tenant administration, Exchange Online, SharePoint, and compliance. He is fluent in Arabic and English, enabling Iqra365 to serve clients worldwide with native-language delivery. His focus is on making Microsoft security practical and sustainable for growing organisations.",
    avatar: null,
  },
];

export function FoundersSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Who we are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Founded by <span className="text-gradient-brand">practitioners</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Two certified Microsoft 365 professionals who saw that mid-market companies worldwide were
            being underserved by both large consultancies (too expensive) and generic IT providers
            (not specialised enough).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {founders.map((f) => (
            <div key={f.name} className="animate-fade-in-up glass rounded-3xl p-8 shadow-elegant">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  {f.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                  Microsoft Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {f.certs.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-[11px] leading-tight text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground hover:shadow-md"
                    >
                      <MicrosoftIcon />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up mt-10 glass rounded-2xl p-6 md:p-8 text-center">
          <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
          <blockquote className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            "We started Iqra365 because companies everywhere deserve Microsoft security expertise that's
            both world-class and accessible. No inflated promises. No boilerplate. Just honest,
            practitioner-led delivery."
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold">— Shoyeb Khan & Musheer Hashmi</div>
            <div className="text-sm text-muted-foreground">
              Co-Founders, Iqra365 Cloud Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
