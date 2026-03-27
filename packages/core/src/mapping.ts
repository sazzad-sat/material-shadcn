import type { DynamicScheme } from "@material/material-color-utilities";

/**
 * Maps shadcn CSS variable names to Material 3 DynamicScheme property accessors.
 * Each entry: [shadcn-token-name, (scheme) => argb-integer]
 */
export const TOKEN_MAP: Array<[string, (scheme: DynamicScheme) => number]> = [
  // Background & foreground
  ["background", (s) => s.surface],
  ["foreground", (s) => s.onSurface],

  // Card
  ["card", (s) => s.surfaceContainerLow],
  ["card-foreground", (s) => s.onSurface],

  // Popover
  ["popover", (s) => s.surfaceContainerLow],
  ["popover-foreground", (s) => s.onSurface],

  // Primary
  ["primary", (s) => s.primary],
  ["primary-foreground", (s) => s.onPrimary],

  // Secondary
  ["secondary", (s) => s.secondaryContainer],
  ["secondary-foreground", (s) => s.onSecondaryContainer],

  // Muted
  ["muted", (s) => s.surfaceVariant],
  ["muted-foreground", (s) => s.onSurfaceVariant],

  // Accent – use custom tones from the tertiary palette for consistency across variants
  ["accent", (s) => s.tertiaryPalette.tone(s.isDark ? 15 : 95)],
  ["accent-foreground", (s) => s.tertiaryPalette.tone(s.isDark ? 90 : 10)],

  // Destructive
  ["destructive", (s) => s.error],
  ["destructive-foreground", (s) => s.onError],

  // Border / Input / Ring
  ["border", (s) => s.outlineVariant],
  ["input", (s) => s.outlineVariant],
  ["ring", (s) => s.primary],

  // Sidebar
  ["sidebar-background", (s) => s.surfaceContainer],
  ["sidebar-foreground", (s) => s.onSurface],
  ["sidebar-primary", (s) => s.primary],
  ["sidebar-primary-foreground", (s) => s.onPrimary],
  ["sidebar-accent", (s) => s.tertiaryPalette.tone(s.isDark ? 20 : 90)],
  ["sidebar-accent-foreground", (s) => s.tertiaryPalette.tone(s.isDark ? 90 : 10)],
  ["sidebar-border", (s) => s.outlineVariant],
  ["sidebar-ring", (s) => s.primary],
];

/**
 * Chart colors use different M3 roles at varied tones for visual distinction.
 */
export const CHART_MAP: Array<[string, (scheme: DynamicScheme) => number]> = [
  ["chart-1", (s) => s.primaryPalette.tone(48)],
  ["chart-2", (s) => s.primaryPalette.tone(60)],
  ["chart-3", (s) => s.primaryPalette.tone(72)],
  ["chart-4", (s) => s.primaryPalette.tone(36)],
  ["chart-5", (s) => s.primaryPalette.tone(84)],
];
