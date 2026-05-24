import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { useTheme } from "./ThemeProvider";

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  const src = theme === "dark" ? logoDark : logoLight;
  return <img src={src} alt="Iqra365 Cloud Solutions" className={className} />;
}
