import { motion } from "framer-motion";
import { memo } from "react";

export const AnimatedBackground = memo(function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-hero" />
      {/* Floating orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30 bg-gradient-azure"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 bg-gradient-orange"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-3xl opacity-20 bg-green-brand"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Particles */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <radialGradient id="dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.55 0.24 240)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 240)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 15 }).map((_, i) => {
          const cx = (i * 137) % 100;
          const cy = (i * 73) % 100;
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={2 + (i % 3)}
              fill="url(#dot)"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
});
