import { createFileRoute } from "@tanstack/react-router";
import { signup } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/signup")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, password } = await request.json() as { name: string; email: string; password: string };
          if (!name || !email || !password) {
            return Response.json({ error: "Name, email, and password are required" }, { status: 400 });
          }
          if (password.length < 6) {
            return Response.json({ error: "Password must be at least 6 characters" }, { status: 400 });
          }
          const result = await signup(name, email, password);
          if (result.error) {
            return Response.json(result, { status: 409 });
          }
          return new Response(JSON.stringify(result), {
            status: 201,
            headers: { "content-type": "application/json", "cache-control": "no-store" },
          });
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }
      },
    },
  },
});
