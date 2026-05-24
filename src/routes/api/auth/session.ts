import { createFileRoute } from "@tanstack/react-router";
import { getSessionUser, getTokenFromRequest } from "@/lib/auth";

export const Route = createFileRoute("/api/auth/session")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const token = getTokenFromRequest(request);
        if (!token) {
          return Response.json({ user: null });
        }
        const user = await getSessionUser(token);
        return Response.json({ user });
      },
    },
  },
});
