const techAreas = [
  "Entra ID", "Intune", "Microsoft Defender",
  "Microsoft Purview", "Azure & Sentinel", "M365 Operations",
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border/60 bg-background/40 backdrop-blur">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Our technology stack
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techAreas.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full glass border-border/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
