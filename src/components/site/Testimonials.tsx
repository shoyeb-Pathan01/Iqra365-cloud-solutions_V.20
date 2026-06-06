import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useContent } from "@/lib/content";

export function Testimonials() {
  const content = useContent();
  const testimonials = (content.testimonials as Array<{ quote: string; author: string; company: string }>) ?? [];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!testimonials.length) return;
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, [testimonials.length]);
  const t = testimonials[i];
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-fade-in-up text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Vision</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Built by practitioners, <span className="text-gradient-brand">led by purpose</span>
          </h2>
        </div>

        <div
          key={i}
          className="animate-fade-in glass rounded-3xl p-6 md:p-14 text-center shadow-elegant relative overflow-hidden"
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
                aria-label={`Show vision ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
