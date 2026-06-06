import { createFileRoute } from "@tanstack/react-router";
import { getDb } from "../../lib/env";

export const Route = createFileRoute("/api/content")({
  server: {
    handlers: {
      GET: async () => {
        const db = getDb();
        if (!db) {
          return new Response(JSON.stringify({ error: "Database not available" }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
        const { results } = await db.prepare("SELECT key, value FROM site_content").all<{ key: string; value: string }>();
        const content: Record<string, unknown> = {};
        for (const row of results) {
          try {
            content[row.key] = JSON.parse(row.value);
          } catch {
            content[row.key] = row.value;
          }
        }
        return new Response(JSON.stringify(content), {
          status: 200,
          headers: { "content-type": "application/json", "cache-control": "public, max-age=300, s-maxage=600" },
        });
      },
    },
  },
});
