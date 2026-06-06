import { createFileRoute } from "@tanstack/react-router";
import { logout, getTokenFromRequest } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/logout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = getTokenFromRequest(request);
        if (token) await logout(token);
        return new Response(JSON.stringify({ ok: true }), {
          headers: { "content-type": "application/json", "cache-control": "no-store" },
        });
      },
    },
  },
});
