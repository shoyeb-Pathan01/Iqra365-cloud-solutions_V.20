import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up relative rounded-3xl overflow-hidden p-6 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-gradient-azure opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-brand">
              Ready to modernize with confidence?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Book a free 30-minute consultation. We'll assess your cloud & security posture and outline a clear roadmap.
            </p>
            <Button asChild size="lg" className="bg-gradient-orange text-white border-0 shadow-glow-orange group">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
