import { Outlet, createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContentContext, type SiteContent } from "@/lib/content";
import { getDb } from "@/lib/env";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex mt-6 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Try again
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI Consultancy" },
      { name: "description", content: "Microsoft-focused cloud, cybersecurity, and digital transformation consultancy. Azure, Microsoft 365, Defender, Sentinel, Entra & Intune." },
      { property: "og:site_name", content: "Iqra365 Cloud Solutions" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI Consultancy" },
      { property: "og:description", content: "Microsoft-focused cloud, cybersecurity, and digital transformation consultancy. Azure, Microsoft 365, Defender, Sentinel, Entra & Intune." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI Consultancy" },
      { name: "twitter:description", content: "Microsoft-focused cloud, cybersecurity, and digital transformation consultancy. Azure, Microsoft 365, Defender, Sentinel, Entra & Intune." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a4f6380b-b470-4c6f-bd8e-49d9e4cd49f3" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a4f6380b-b470-4c6f-bd8e-49d9e4cd49f3" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preload", href: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU79TKtkLA.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  loader: async (): Promise<SiteContent> => {
    try {
      const db = getDb();
      if (!db) return {};
      const { results } = await db.prepare("SELECT key, value FROM site_content").all<{ key: string; value: string }>();
      const content: SiteContent = {};
      for (const row of results) {
        try { content[row.key] = JSON.parse(row.value); } catch { content[row.key] = row.value; }
      }
      return content;
    } catch {
      return {};
    }
  },
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const loaderData = Route.useLoaderData();
  return (
    <QueryClientProvider client={queryClient}>
      <ContentContext.Provider value={loaderData}>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
      </ContentContext.Provider>
    </QueryClientProvider>
  );
}
