import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "+", label: "Enterprise Clients" },
  { value: 25, suffix: "+", label: "Microsoft Certifications" },
  { value: 8, suffix: "+", label: "Years of Expertise" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 shadow-elegant">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
