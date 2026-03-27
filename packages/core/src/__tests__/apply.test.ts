import { describe, it, expect, beforeEach } from "vitest";
import {
  tokensToCssVars,
  applyTheme,
  removeTheme,
  resolveColorMode,
} from "../apply.js";
import type { GeneratedTheme, ThemeTokens } from "../generate.js";

// Minimal mock element for dry-run testing (no jsdom needed)
function createMockElement() {
  const styles = new Map<string, string>();
  const classes = new Set<string>();

  return {
    style: {
      setProperty(key: string, value: string) {
        styles.set(key, value);
      },
      removeProperty(key: string) {
        styles.delete(key);
      },
    },
    classList: {
      add(cls: string) {
        classes.add(cls);
      },
      remove(cls: string) {
        classes.delete(cls);
      },
      contains(cls: string) {
        return classes.has(cls);
      },
    },
    // Test helpers
    _styles: styles,
    _classes: classes,
  } as unknown as HTMLElement & {
    _styles: Map<string, string>;
    _classes: Set<string>;
  };
}

function createMockTheme(): GeneratedTheme {
  return {
    light: {
      background: "oklch(0.98 0.01 300)",
      foreground: "oklch(0.15 0.02 280)",
      primary: "oklch(0.49 0.09 295)",
    },
    dark: {
      background: "oklch(0.19 0.01 300)",
      foreground: "oklch(0.93 0.01 280)",
      primary: "oklch(0.78 0.08 295)",
    },
  };
}

describe("tokensToCssVars", () => {
  it("prefixes each key with --", () => {
    const tokens: ThemeTokens = {
      background: "oklch(0.98 0.01 300)",
      primary: "oklch(0.49 0.09 295)",
    };

    const result = tokensToCssVars(tokens);

    expect(result).toEqual({
      "--background": "oklch(0.98 0.01 300)",
      "--primary": "oklch(0.49 0.09 295)",
    });
  });

  it("returns empty object for empty tokens", () => {
    expect(tokensToCssVars({})).toEqual({});
  });

  it("handles hyphenated token names", () => {
    const tokens: ThemeTokens = {
      "card-foreground": "oklch(0.15 0.02 280)",
      "sidebar-primary": "oklch(0.49 0.09 295)",
    };

    const result = tokensToCssVars(tokens);

    expect(result["--card-foreground"]).toBe("oklch(0.15 0.02 280)");
    expect(result["--sidebar-primary"]).toBe("oklch(0.49 0.09 295)");
  });
});

describe("applyTheme", () => {
  let el: ReturnType<typeof createMockElement>;
  let theme: GeneratedTheme;

  beforeEach(() => {
    el = createMockElement();
    theme = createMockTheme();
  });

  it("applies light tokens when dark is false", () => {
    applyTheme(el, theme, false);

    expect(el._styles.get("--background")).toBe("oklch(0.98 0.01 300)");
    expect(el._styles.get("--primary")).toBe("oklch(0.49 0.09 295)");
    expect(el._classes.has("dark")).toBe(false);
  });

  it("applies dark tokens and adds dark class when dark is true", () => {
    applyTheme(el, theme, true);

    expect(el._styles.get("--background")).toBe("oklch(0.19 0.01 300)");
    expect(el._styles.get("--primary")).toBe("oklch(0.78 0.08 295)");
    expect(el._classes.has("dark")).toBe(true);
  });

  it("removes dark class when switching from dark to light", () => {
    applyTheme(el, theme, true);
    expect(el._classes.has("dark")).toBe(true);

    applyTheme(el, theme, false);
    expect(el._classes.has("dark")).toBe(false);
  });

  it("sets all token keys as CSS custom properties", () => {
    applyTheme(el, theme, false);

    const keys = Array.from(el._styles.keys());
    expect(keys).toContain("--background");
    expect(keys).toContain("--foreground");
    expect(keys).toContain("--primary");
    expect(keys).toHaveLength(3);
  });
});

describe("removeTheme", () => {
  let el: ReturnType<typeof createMockElement>;
  let theme: GeneratedTheme;

  beforeEach(() => {
    el = createMockElement();
    theme = createMockTheme();
  });

  it("removes all CSS custom properties", () => {
    applyTheme(el, theme, false);
    expect(el._styles.size).toBe(3);

    removeTheme(el, theme);
    expect(el._styles.size).toBe(0);
  });

  it("removes dark class", () => {
    applyTheme(el, theme, true);
    expect(el._classes.has("dark")).toBe(true);

    removeTheme(el, theme);
    expect(el._classes.has("dark")).toBe(false);
  });
});

describe("resolveColorMode", () => {
  it("returns false for 'light'", () => {
    expect(resolveColorMode("light")).toBe(false);
  });

  it("returns true for 'dark'", () => {
    expect(resolveColorMode("dark")).toBe(true);
  });

  it("returns a boolean for 'system'", () => {
    // In Node/vitest without jsdom, window is undefined → falls back to false
    const result = resolveColorMode("system");
    expect(typeof result).toBe("boolean");
  });
});
