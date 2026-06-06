import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/content";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.unobserve(el); }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1500;
    const step = () => {
      const t = Math.min(1, (Date.now() - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(step);
    };
    step();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  const content = useContent();
  const stats = (content.stats as Array<{ value: number; suffix: string; label: string }>) ?? [];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 shadow-elegant">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`animate-fade-in-up animate-delay-${i * 100} text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
