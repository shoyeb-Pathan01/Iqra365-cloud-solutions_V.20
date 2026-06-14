import { Users, Shield } from "lucide-react";

const facts = [
  { value: "2", suffix: "", label: "Certified Microsoft Practitioners" },
  { value: "6", suffix: "", label: "Microsoft Technology Areas" },
  { value: "24/7", suffix: "", label: "Ongoing Retainer Support" },
  { value: "India + Gulf", suffix: "", label: "Primary Markets" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 shadow-elegant">
          {facts.map((s, i) => (
            <div
              key={s.label}
              className={`animate-fade-in-up animate-delay-${i * 100} text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">
                {s.value}{s.suffix}
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
