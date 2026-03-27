import { describe, it, expect } from "vitest";
import { generateTheme, generateRegistryTheme } from "../generate.js";
import { TOKEN_MAP, CHART_MAP } from "../mapping.js";
import { Variant } from "@material/material-color-utilities";

const SEED = "#6750A4";
const EXPECTED_TOKEN_COUNT = TOKEN_MAP.length + CHART_MAP.length;

describe("generateTheme", () => {
  it("returns light and dark token objects", () => {
    const theme = generateTheme({ seed: SEED });

    expect(theme).toHaveProperty("light");
    expect(theme).toHaveProperty("dark");
    expect(typeof theme.light).toBe("object");
    expect(typeof theme.dark).toBe("object");
  });

  it("generates all expected tokens for both modes", () => {
    const theme = generateTheme({ seed: SEED });

    expect(Object.keys(theme.light)).toHaveLength(EXPECTED_TOKEN_COUNT);
    expect(Object.keys(theme.dark)).toHaveLength(EXPECTED_TOKEN_COUNT);
  });

  it("includes all TOKEN_MAP keys", () => {
    const theme = generateTheme({ seed: SEED });

    for (const [name] of TOKEN_MAP) {
      expect(theme.light).toHaveProperty(name);
      expect(theme.dark).toHaveProperty(name);
    }
  });

  it("includes all CHART_MAP keys", () => {
    const theme = generateTheme({ seed: SEED });

    for (const [name] of CHART_MAP) {
      expect(theme.light).toHaveProperty(name);
      expect(theme.dark).toHaveProperty(name);
    }
  });

  it("outputs valid oklch() strings", () => {
    const theme = generateTheme({ seed: SEED });
    const oklchPattern = /^oklch\(\d+(\.\d+)? \d+(\.\d+)? \d+(\.\d+)?\)$/;

    for (const value of Object.values(theme.light)) {
      expect(value).toMatch(oklchPattern);
    }
    for (const value of Object.values(theme.dark)) {
      expect(value).toMatch(oklchPattern);
    }
  });

  it("produces different values for light and dark", () => {
    const theme = generateTheme({ seed: SEED });

    // At minimum, background should differ
    expect(theme.light.background).not.toBe(theme.dark.background);
  });

  it("uses default variant TONAL_SPOT when not specified", () => {
    const defaultTheme = generateTheme({ seed: SEED });
    const explicitTheme = generateTheme({
      seed: SEED,
      variant: Variant.TONAL_SPOT,
    });

    expect(defaultTheme.light).toEqual(explicitTheme.light);
    expect(defaultTheme.dark).toEqual(explicitTheme.dark);
  });

  it("produces different results for different variants", () => {
    const tonal = generateTheme({ seed: SEED, variant: Variant.TONAL_SPOT });
    const vibrant = generateTheme({ seed: SEED, variant: Variant.VIBRANT });

    // Primary colors should differ between variants
    expect(tonal.light.primary).not.toBe(vibrant.light.primary);
  });

  it("produces different results for different seeds", () => {
    const purple = generateTheme({ seed: "#6750A4" });
    const red = generateTheme({ seed: "#FF0000" });

    expect(purple.light.primary).not.toBe(red.light.primary);
  });

  it("accepts contrast parameter", () => {
    const normal = generateTheme({ seed: SEED, contrast: 0 });
    const high = generateTheme({ seed: SEED, contrast: 1 });

    // High contrast should produce different values
    expect(normal.light.primary).not.toBe(high.light.primary);
  });
});

describe("generateRegistryTheme", () => {
  it("returns a valid shadcn registry:theme object", () => {
    const registry = generateRegistryTheme({ seed: SEED });

    expect(registry.name).toBe("material-theme");
    expect(registry.type).toBe("registry:theme");
    expect(registry.cssVars).toHaveProperty("light");
    expect(registry.cssVars).toHaveProperty("dark");
  });

  it("has the same tokens as generateTheme", () => {
    const theme = generateTheme({ seed: SEED });
    const registry = generateRegistryTheme({ seed: SEED });

    expect(registry.cssVars.light).toEqual(theme.light);
    expect(registry.cssVars.dark).toEqual(theme.dark);
  });
});
