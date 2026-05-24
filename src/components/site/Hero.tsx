import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Cloud, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium mb-6 sm:whitespace-nowrap"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Microsoft-focused Cloud, Security & AI Consultancy
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Secure Cloud.<br className="sm:hidden" />
            <span className="text-gradient-brand">Smarter Infrastructure.</span><br className="sm:hidden" />
            Future-Ready AI.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Iqra365 Cloud Solutions helps organizations modernize IT, strengthen cybersecurity, and accelerate digital transformation with Microsoft Azure, Microsoft 365, and intelligent security solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-gradient-orange text-white border-0 shadow-glow-orange hover:opacity-95 group">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30 hover:border-primary/60">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mt-16"
          >
            {[
              { icon: Cloud, label: "Azure Cloud", value: "Enterprise" },
              { icon: Shield, label: "Security-First", value: "Zero Trust" },
              { icon: Sparkles, label: "AI-Ready", value: "Copilot Era" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-4 md:p-5 text-left"
              >
                <s.icon className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="font-semibold text-sm md:text-base">{s.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
