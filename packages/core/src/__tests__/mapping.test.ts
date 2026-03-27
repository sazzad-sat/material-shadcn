import { describe, it, expect } from "vitest";
import { TOKEN_MAP, CHART_MAP } from "../mapping.js";
import {
  DynamicScheme,
  Hct,
  Variant,
} from "@material/material-color-utilities";

function createScheme(isDark = false): DynamicScheme {
  const hct = Hct.fromInt(0xff6750a4);
  return new DynamicScheme({
    sourceColorHct: hct,
    variant: Variant.TONAL_SPOT,
    contrastLevel: 0,
    isDark,
  });
}

describe("TOKEN_MAP", () => {
  it("has unique token names", () => {
    const names = TOKEN_MAP.map(([name]) => name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("includes all expected shadcn tokens", () => {
    const names = TOKEN_MAP.map(([name]) => name);
    const required = [
      "background",
      "foreground",
      "primary",
      "primary-foreground",
      "secondary",
      "secondary-foreground",
      "destructive",
      "destructive-foreground",
      "border",
      "ring",
      "card",
      "card-foreground",
    ];
    for (const token of required) {
      expect(names).toContain(token);
    }
  });

  it("all accessors return valid ARGB integers for light scheme", () => {
    const scheme = createScheme(false);
    for (const [name, accessor] of TOKEN_MAP) {
      const argb = accessor(scheme);
      expect(typeof argb).toBe("number");
      // ARGB should be a 32-bit integer with full alpha
      expect((argb >>> 24) & 0xff).toBe(0xff);
    }
  });

  it("all accessors return valid ARGB integers for dark scheme", () => {
    const scheme = createScheme(true);
    for (const [name, accessor] of TOKEN_MAP) {
      const argb = accessor(scheme);
      expect(typeof argb).toBe("number");
      expect((argb >>> 24) & 0xff).toBe(0xff);
    }
  });
});

describe("CHART_MAP", () => {
  it("has 5 chart color entries", () => {
    expect(CHART_MAP).toHaveLength(5);
  });

  it("has sequential chart names", () => {
    const names = CHART_MAP.map(([name]) => name);
    expect(names).toEqual([
      "chart-1",
      "chart-2",
      "chart-3",
      "chart-4",
      "chart-5",
    ]);
  });

  it("all accessors return valid ARGB integers", () => {
    const scheme = createScheme(false);
    for (const [, accessor] of CHART_MAP) {
      const argb = accessor(scheme);
      expect(typeof argb).toBe("number");
      expect((argb >>> 24) & 0xff).toBe(0xff);
    }
  });

  it("produces distinct colors", () => {
    const scheme = createScheme(false);
    const values = CHART_MAP.map(([, accessor]) => accessor(scheme));
    expect(new Set(values).size).toBe(5);
  });
});
