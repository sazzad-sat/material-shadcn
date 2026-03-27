import { describe, it, expect } from "vitest";
import { argbToOklch } from "../convert.js";

describe("argbToOklch", () => {
  it("converts M3 purple (#6750A4) to a valid oklch string", () => {
    // 0xFF6750A4
    const argb = 0xff6750a4;
    const result = argbToOklch(argb);

    expect(result).toMatch(/^oklch\(\d+(\.\d+)? \d+(\.\d+)? \d+(\.\d+)?\)$/);
  });

  it("converts pure white to high lightness, zero chroma", () => {
    const argb = 0xffffffff;
    const result = argbToOklch(argb);

    // White should have L≈1, C≈0
    const match = result.match(/oklch\((\S+) (\S+) (\S+)\)/);
    expect(match).not.toBeNull();
    const L = parseFloat(match![1]);
    const C = parseFloat(match![2]);
    expect(L).toBeCloseTo(1, 1);
    expect(C).toBeCloseTo(0, 2);
  });

  it("converts pure black to zero lightness", () => {
    const argb = 0xff000000;
    const result = argbToOklch(argb);

    const match = result.match(/oklch\((\S+) (\S+) (\S+)\)/);
    expect(match).not.toBeNull();
    const L = parseFloat(match![1]);
    expect(L).toBe(0);
  });

  it("converts pure red to expected hue range", () => {
    const argb = 0xffff0000;
    const result = argbToOklch(argb);

    const match = result.match(/oklch\((\S+) (\S+) (\S+)\)/);
    expect(match).not.toBeNull();
    const H = parseFloat(match![3]);
    // Red hue in OKLCH is roughly 20-30
    expect(H).toBeGreaterThan(15);
    expect(H).toBeLessThan(35);
  });

  it("produces consistent results for the same input", () => {
    const argb = 0xff1b6ef3;
    expect(argbToOklch(argb)).toBe(argbToOklch(argb));
  });
});
