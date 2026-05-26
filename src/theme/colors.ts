/**
 * Centralized theme colors system
 * Single source of truth for all color values across the application
 */

export interface ThemeColors {
  accentColor: string
  accentLight: string
  textColor: string
  mutedColor: string
  cardBg: string
  bgColor: string
  borderColor: string
  shadowLg: string
  isDark: boolean
}

/**
 * Detect if dark mode is active
 * Checks the data-theme attribute on the document root
 */
export function getIsDark(): boolean {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

/**
 * Get all theme colors based on dark mode state
 * @param isDark - Whether dark mode is active
 * @returns Object containing all theme color values
 */
export function getThemeColors(isDark: boolean): ThemeColors {
  return {
    // Primary accent color
    accentColor: isDark ? '#2bd4c9' : '#0ea5a4',
    accentLight: isDark ? '#0e5f59' : '#d5f4f1',

    // Text colors
    textColor: isDark ? '#e6eef8' : '#0f172a',
    mutedColor: isDark ? '#94a3b8' : '#6b7280',

    // Surface colors
    cardBg: isDark ? '#111729' : '#ffffff',
    bgColor: isDark ? '#071024' : '#fbfbfb',

    // Borders & shadows
    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    shadowLg: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(2,6,23,0.12)',

    // Mode indicator
    isDark
  }
}

/**
 * Convenience hook alternative: Get theme colors with auto dark mode detection
 */
export function useThemeColors(): ThemeColors {
  const isDark = getIsDark()
  return getThemeColors(isDark)
}

/**
 * Get navbar-specific background color with opacity
 * @param isDark - Whether dark mode is active
 */
export function getNavbarBgColor(isDark: boolean): string {
  return isDark ? 'rgba(20,20,20,0.75)' : 'rgba(255,255,255,0.75)'
}
