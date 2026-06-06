import { createFileRoute } from "@tanstack/react-router";
import { login } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email, password } = await request.json() as { email: string; password: string };
          if (!email || !password) {
            return Response.json({ error: "Email and password are required" }, { status: 400 });
          }
          const result = await login(email, password);
          if (result.error) {
            return Response.json(result, { status: 401 });
          }
          return new Response(JSON.stringify(result), {
            headers: { "content-type": "application/json", "cache-control": "no-store" },
          });
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }
      },
    },
  },
});
