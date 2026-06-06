import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const staticEntries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          { path: "/technologies", priority: "0.7" },
          { path: "/case-studies", priority: "0.7" },
          { path: "/contact", priority: "0.8" },
        ];
        const serviceSlugs = [
          "microsoft-365-solutions", "azure-cloud-infrastructure", "cloud-migration",
          "cybersecurity-compliance", "identity-access-entra-id", "endpoint-security-intune",
          "backup-disaster-recovery", "web-application-development",
        ];
        const caseStudySlugs = [
          "banking-azure-landing-zone", "healthcare-sentinel-siem", "manufacturing-m365-rollout",
          "retail-azure-synapse", "financial-zero-trust-iam", "logistics-bcdr-modernization",
        ];
        const serviceEntries = serviceSlugs.map((s) => ({ path: `/services/${s}`, priority: "0.7" }));
        const caseStudyEntries = caseStudySlugs.map((s) => ({ path: `/case-studies/${s}`, priority: "0.6" }));
        const allEntries = [...staticEntries, ...serviceEntries, ...caseStudyEntries];
        const urls = allEntries.map((e) =>
          `  <url>\n    <loc>${origin}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
