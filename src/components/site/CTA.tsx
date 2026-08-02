import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in-up relative rounded-3xl overflow-hidden p-6 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-gradient-azure opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Free 30-minute consultation
            </h2>
            <p className="text-white/85 max-w-xl mx-auto mb-8">
              No sales pitch. We'll assess your Microsoft tenant's security posture, identify gaps, and outline a clear roadmap — at no cost and with zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-orange text-white border-0 shadow-glow-orange group">
                <Link to="/contact">
                  Book Your Session
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/25 hover:bg-white/20 hover:border-white/40">
                <a href="mailto:Info@iqra365cloudsolutions.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </a>
              </Button>
            </div>
            <p className="text-white/70 text-xs mt-6">
              Arabic support available. اتصّل بنا باللغة العربية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
