import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Stats } from "@/components/site/Stats";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { ProcessSection } from "@/components/site/CaseStudies";
import { FoundersSection } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iqra365 Cloud Solutions — Microsoft Security & Cloud Consultancy" },
      { name: "description", content: "Specialist Microsoft Security & Cloud consultancy for Indian enterprises. Entra ID, Intune, Defender, Purview, Azure Sentinel, M365 Operations. Founded by certified Microsoft 365 practitioners." },
      { property: "og:title", content: "Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Specialist Microsoft Security & Cloud consultancy for Indian mid-market companies." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicesGrid />
      <WhyUs />
      <ProcessSection />
      <FoundersSection />
      <CTA />
    </>
  );
}
