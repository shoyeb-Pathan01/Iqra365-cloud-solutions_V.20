import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Stats } from "@/components/site/Stats";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI" },
      { name: "description", content: "Modernize IT, strengthen cybersecurity, and accelerate digital transformation with Microsoft Azure, M365, Defender, Sentinel, Entra & Intune." },
      { property: "og:title", content: "Iqra365 Cloud Solutions" },
      { property: "og:description", content: "Secure Cloud. Smarter Infrastructure. Future-Ready AI Solutions." },
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
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}
