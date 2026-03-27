import type { ThemeTokens, GeneratedTheme } from "./generate.js";

export type ColorMode = "light" | "dark" | "system";

/**
 * Convert ThemeTokens to a CSS custom property map for use with inline styles.
 * e.g. { background: "oklch(...)" } → { "--background": "oklch(...)" }
 */
export function tokensToCssVars(
  tokens: ThemeTokens
): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens)) {
    vars[`--${key}`] = value;
  }
  return vars;
}

/**
 * Apply a generated theme to a DOM element by setting CSS custom properties.
 * Also toggles the `dark` class on the element.
 */
export function applyTheme(
  element: HTMLElement,
  theme: GeneratedTheme,
  dark: boolean
): void {
  const tokens = dark ? theme.dark : theme.light;

  if (dark) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }

  for (const [key, value] of Object.entries(tokens)) {
    element.style.setProperty(`--${key}`, value);
  }
}

/**
 * Remove all theme CSS custom properties from an element.
 */
export function removeTheme(
  element: HTMLElement,
  theme: GeneratedTheme
): void {
  for (const key of Object.keys(theme.light)) {
    element.style.removeProperty(`--${key}`);
  }
  element.classList.remove("dark");
}

/**
 * Resolve a ColorMode to a boolean indicating dark mode.
 * Returns false on the server (no `window`).
 */
export function resolveColorMode(mode: ColorMode): boolean {
  if (mode === "system") {
    return typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  }
  return mode === "dark";
}
