export let cloudflareEnv: { DB: D1Database } | null = null;

export function setCloudflareEnv(env: unknown) {
  cloudflareEnv = env as { DB: D1Database } | null;
}

export function getDb(): D1Database | null {
  return cloudflareEnv?.DB ?? null;
}
