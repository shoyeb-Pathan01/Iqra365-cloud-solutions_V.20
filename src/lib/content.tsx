import { createContext, useContext } from "react";

type SiteContent = Record<string, unknown>;

const ContentContext = createContext<SiteContent | null>(null);

export function useContent(): SiteContent {
  const ctx = useContext(ContentContext);
  return ctx ?? {};
}

export { ContentContext };
export type { SiteContent };
