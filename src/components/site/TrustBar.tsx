import { useContent } from "@/lib/content";

export function TrustBar() {
  const content = useContent();
  const tb = (content.trust_bar as Record<string, unknown>) ?? {};
  const partners = (tb.partners as string[]) ?? [];
  const items = [...partners, ...partners];
  return (
    <section className="py-12 border-y border-border/60 bg-background/40 backdrop-blur">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {(tb.label as string) ?? "Trusted technologies & certifications"}
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 marquee whitespace-nowrap">
            {items.map((p, i) => (
              <div
                key={i}
                className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                {p}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
