/**
 * Central theme manifest.
 *
 * To add a theme: create src/themes/<name>.css (every selector scoped to
 * [data-zen-theme="<name>"]), import it below and add one entry to ZEN_THEMES.
 * ZenCanvas.tsx is never touched.
 */
import './editorial.css'
import './neo-brutalist.css'
import './cyber-glass.css'

export interface ZenTheme {
  /** Value written to the data-zen-theme attribute. */
  id: string
  /** Human readable label (used by the Storybook toolbar). */
  label: string
  description: string
}

export const ZEN_THEMES = {
  default: { id: 'default', label: 'Paper (default)', description: 'Base tokens and default grid.' },
  editorial: { id: 'editorial', label: 'Editorial', description: 'Warm broadsheet with serif type and hairline rules.' },
  'neo-brutalist': { id: 'neo-brutalist', label: 'Neo-brutalist', description: 'Hard offset shadows, monospace, sidebar on the left.' },
  'cyber-glass': { id: 'cyber-glass', label: 'Cyber glass', description: 'Dark glow with frosted translucent cards.' },
} as const satisfies Record<string, ZenTheme>

export type ZenThemeId = keyof typeof ZEN_THEMES

export const ZEN_THEME_LABELS: Record<string, string> = Object.fromEntries(
  Object.values(ZEN_THEMES).map((t) => [t.id, t.label]),
)
