import {
  redFromArgb,
  greenFromArgb,
  blueFromArgb,
} from "@material/material-color-utilities";

/**
 * Convert an ARGB integer (from material-color-utilities) to an OKLCH CSS string.
 * e.g. 0xFF6750A4 → "oklch(0.448 0.141 291.3)"
 */
export function argbToOklch(argb: number): string {
  const r = redFromArgb(argb) / 255;
  const g = greenFromArgb(argb) / 255;
  const b = blueFromArgb(argb) / 255;

  // sRGB → linear RGB
  const lr = linearize(r);
  const lg = linearize(g);
  const lb = linearize(b);

  // Linear RGB → OKLab (via LMS)
  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l_3 = Math.cbrt(l_);
  const m_3 = Math.cbrt(m_);
  const s_3 = Math.cbrt(s_);

  const L = 0.2104542553 * l_3 + 0.793617785 * m_3 - 0.0040720468 * s_3;
  const a = 1.9779984951 * l_3 - 2.428592205 * m_3 + 0.4505937099 * s_3;
  const bOk = 0.0259040371 * l_3 + 0.7827717662 * m_3 - 0.808675766 * s_3;

  // OKLab → OKLCH
  const C = Math.sqrt(a * a + bOk * bOk);
  let h = (Math.atan2(bOk, a) * 180) / Math.PI;
  if (h < 0) h += 360;

  const lRound = round(L, 3);
  const cRound = round(C, 3);
  const hRound = round(h, 1);

  return `oklch(${lRound} ${cRound} ${hRound})`;
}

/** sRGB gamma → linear */
function linearize(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
