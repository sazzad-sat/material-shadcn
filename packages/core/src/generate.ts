import {
  argbFromHex,
  DynamicScheme,
  Hct,
  Variant,
} from "@material/material-color-utilities";
import { argbToOklch } from "./convert.js";
import { TOKEN_MAP, CHART_MAP } from "./mapping.js";

export interface GenerateOptions {
  /** Seed color as hex string (e.g. "#6750A4") */
  seed: string;
  /** M3 variant style. Default: TONAL_SPOT */
  variant?: Variant;
  /** Contrast level from -1 to 1. Default: 0 */
  contrast?: number;
}

export interface ThemeTokens {
  [key: string]: string;
}

export interface GeneratedTheme {
  light: ThemeTokens;
  dark: ThemeTokens;
}

function createScheme(
  sourceHct: Hct,
  isDark: boolean,
  variant: Variant,
  contrast: number
): DynamicScheme {
  return new DynamicScheme({
    sourceColorHct: sourceHct,
    variant,
    contrastLevel: contrast,
    isDark,
  });
}

function schemeToTokens(scheme: DynamicScheme): ThemeTokens {
  const tokens: ThemeTokens = {};

  for (const [name, accessor] of TOKEN_MAP) {
    tokens[name] = argbToOklch(accessor(scheme));
  }

  for (const [name, accessor] of CHART_MAP) {
    tokens[name] = argbToOklch(accessor(scheme));
  }

  return tokens;
}

/**
 * Generate a complete shadcn-compatible theme from a seed color using Material 3.
 */
export function generateTheme(options: GenerateOptions): GeneratedTheme {
  const { seed, variant = Variant.TONAL_SPOT, contrast = 0 } = options;

  const argb = argbFromHex(seed);
  const sourceHct = Hct.fromInt(argb);

  const lightScheme = createScheme(sourceHct, false, variant, contrast);
  const darkScheme = createScheme(sourceHct, true, variant, contrast);

  return {
    light: schemeToTokens(lightScheme),
    dark: schemeToTokens(darkScheme),
  };
}

/**
 * Generate a shadcn registry:theme JSON object for use with `npx shadcn add`.
 */
export function generateRegistryTheme(options: GenerateOptions) {
  const theme = generateTheme(options);

  return {
    name: "material-theme",
    type: "registry:theme",
    cssVars: {
      light: theme.light,
      dark: theme.dark,
    },
  };
}
