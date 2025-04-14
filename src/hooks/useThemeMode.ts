// hooks/useThemeMode.ts
import { useTheme } from "next-themes";

export const useThemeMode = () => {
  const { resolvedTheme } = useTheme();
  return resolvedTheme; // "dark" or "light"
};
