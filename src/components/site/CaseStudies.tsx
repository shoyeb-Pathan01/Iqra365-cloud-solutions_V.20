import { Search, Settings, ShieldCheck, type LucideIcon } from "lucide-react";

const steps: Array<{ icon: keyof typeof stepIconMap; title: string; desc: string; color: string }> = [
  {
    icon: "Search",
    title: "1. Assessment",
    desc: "We start with a deep dive into your Microsoft tenant — identity security, endpoint compliance, threat protection coverage, and data governance posture. You get a written findings report with clear priorities.",
    color: "from-[oklch(0.42_0.22_220)] to-[oklch(0.55_0.22_210)]",
  },
  {
    icon: "Settings",
    title: "2. Implementation",
    desc: "We deploy fixes, configure policies, and harden your environment. Every change is documented, tested, and explained. You're never left wondering what was done or why.",
    color: "from-[oklch(0.65_0.24_50)] to-[oklch(0.58_0.26_40)]",
  },
  {
    icon: "ShieldCheck",
    title: "3. Retainer (Ongoing)",
    desc: "Security is not a one-time project. We offer ongoing M365 operations, monthly health reviews, threat monitoring, and priority support — all on a transparent monthly retainer.",
    color: "from-[oklch(0.42_0.24_160)] to-[oklch(0.62_0.24_145)]",
  },
];

const stepIconMap: Record<string, LucideIcon> = { Search, Settings, ShieldCheck };

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What working with us looks like</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Simple, transparent <span className="text-gradient-brand">engagement</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We don't lock you into long contracts. Every engagement follows a clear three-phase structure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((c, i) => {
            const Icon = stepIconMap[c.icon] ?? Search;
            return (
              <div
                key={c.title}
                className={`animate-fade-in-up animate-delay-${i * 100} group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elegant`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
                <div className="absolute inset-0 opacity-30 grid-bg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-32 sm:h-56 w-32 sm:w-56 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative h-full p-7 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-white/15 backdrop-blur px-3 py-1 rounded-full">
                      Phase {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                    <p className="text-sm text-white/85">{c.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8 italic">
          Our first client case studies — coming soon. We'll only publish them with client consent.
        </p>
      </div>
    </section>
  );
}
