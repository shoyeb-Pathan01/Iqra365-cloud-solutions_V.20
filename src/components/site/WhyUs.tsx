import { ShieldCheck, Users, Clock, Globe, TrendingDown, HandshakeIcon, type LucideIcon } from "lucide-react";

const items: Array<{ icon: keyof typeof whyIconMap; title: string; desc: string }> = [
  {
    icon: "ShieldCheck",
    title: "Microsoft-Only Specialisation",
    desc: "We don't spread across technology stacks. Every consultant on every engagement works exclusively in the Microsoft security and cloud ecosystem every day.",
  },
  {
    icon: "Users",
    title: "Practitioners, Not Theorists",
    desc: "Both founders are certified M365 practitioners working in production environments daily. We design what we've deployed ourselves.",
  },
  {
    icon: "Clock",
    title: "Right-Timing for India Inc.",
    desc: "DPDP Act compliance deadlines, RBI guidelines, and ISO 27001 audit pressure are creating urgent demand. This is exactly what we're built for.",
  },
  {
    icon: "Globe",
    title: "Arabic & Gulf Capability",
    desc: "Co-founder Musheer Hashmi is an Arabic speaker, enabling fluent delivery for clients across UAE, Saudi Arabia, and Qatar.",
  },
  {
    icon: "TrendingDown",
    title: "Cost-Effective for Mid-Market",
    desc: "We deliver specialist Microsoft expertise at rates that make sense for Indian companies with 50–500 users. No big-firm overhead.",
  },
  {
    icon: "HandshakeIcon",
    title: "Project + Retainer Model",
    desc: "Every engagement starts with a defined project scope. Clients who need ongoing support move to a retainer — no lock-in, complete transparency.",
  },
];

const whyIconMap: Record<string, LucideIcon> = { ShieldCheck, Users, Clock, Globe, TrendingDown, HandshakeIcon };

export function WhyUs() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Why Iqra365</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Built for Indian enterprises
          </h2>
          <p className="text-muted-foreground">
            Six reasons why mid-market companies choose a specialist Microsoft consultancy over generic IT providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = whyIconMap[it.icon] ?? ShieldCheck;
            return (
              <div
                key={it.title}
                className={`animate-fade-in-up animate-delay-${i * 60} glass rounded-2xl p-6 hover:border-primary/40 transition-colors`}
              >
                <Icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
