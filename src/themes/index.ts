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
import './ligne-claire.css'
import './wizarding-ledger.css'
import './pixel-quest.css'

export interface ZenTheme {
  /** Value written to the data-zen-theme attribute. */
  id: string
  /** Human readable label (used by the Storybook toolbar). */
  label: string
  description: string
}

export const ZEN_THEMES = {
  default: {
    id: 'default',
    label: 'Paper (default)',
    description: 'Base tokens and default grid.',
  },
  editorial: {
    id: 'editorial',
    label: 'Editorial',
    description: 'Warm broadsheet with serif type and hairline rules.',
  },
  'neo-brutalist': {
    id: 'neo-brutalist',
    label: 'Neo-brutalist',
    description: 'Hard offset shadows, monospace, sidebar on the left.',
  },
  'cyber-glass': {
    id: 'cyber-glass',
    label: 'Cyber glass',
    description: 'Dark glow with frosted translucent cards.',
  },
  'ligne-claire': {
    id: 'ligne-claire',
    label: 'Tintin (Ligne claire)',
    description: 'Uniform ink outlines, flat fills, expedition ochre and sky blue.',
  },
  'wizarding-ledger': {
    id: 'wizarding-ledger',
    label: 'Harry Potter (Wizarding ledger)',
    description: 'Midnight stone, vellum text, gilded double-ruled cards.',
  },
  'pixel-quest': {
    id: 'pixel-quest',
    label: 'Pixel art (16-bit quest)',
    description: 'Stepped pixel frames, hard shadows, quest-log layout.',
  },
} as const satisfies Record<string, ZenTheme>

export type ZenThemeId = keyof typeof ZEN_THEMES

/** The theme named by a `?theme=` value, falling back to the default for anything unknown. */
export function resolveTheme(requested: string | null): ZenThemeId {
  return requested !== null && Object.hasOwn(ZEN_THEMES, requested)
    ? (requested as ZenThemeId)
    : 'default'
}
