import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Iqra365 led our Azure migration flawlessly. Zero downtime, 30% lower spend, and our security posture has never been stronger.",
    author: "Director of IT",
    company: "Financial Services Firm",
  },
  {
    quote: "Their Sentinel + Defender rollout gave us real visibility for the first time. The team feels like an extension of ours.",
    author: "CISO",
    company: "Healthcare Group",
  },
  {
    quote: "From M365 governance to Intune, they delivered an enterprise-grade workplace for our 2,000+ users in record time.",
    author: "CIO",
    company: "Manufacturing Enterprise",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6 md:p-14 text-center shadow-elegant relative overflow-hidden"
        >
          <Quote className="h-10 w-10 text-primary/40 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
            "{t.quote}"
          </p>
          <div>
            <div className="font-semibold">{t.author}</div>
            <div className="text-sm text-muted-foreground">{t.company}</div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary" : "w-4 bg-border"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
