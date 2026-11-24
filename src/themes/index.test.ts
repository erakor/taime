import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { ZEN_THEMES, resolveTheme } from '.'

const themes = Object.entries(ZEN_THEMES)
const read = (file: string) => readFileSync(new URL(file, import.meta.url), 'utf8')

describe('ZEN_THEMES', () => {
  it.each(themes)('%s: key matches id', (key, theme) => {
    expect(theme.id).toBe(key)
  })

  it('has unique labels (Storybook maps toolbar labels back to ids)', () => {
    const labels = themes.map(([, theme]) => theme.label)
    expect(new Set(labels).size).toBe(labels.length)
  })

  it.each(themes.filter(([id]) => id !== 'default'))(
    '%s: is imported and scoped to its data-zen-theme',
    (id) => {
      expect(read('./index.ts')).toContain(`import './${id}.css'`)
      expect(read(`./${id}.css`)).toMatch(new RegExp(`\\[data-zen-theme=(['"])${id}\\1\\]`))
    },
  )
})

describe('resolveTheme', () => {
  it('returns a known theme', () => {
    expect(resolveTheme('editorial')).toBe('editorial')
  })

  it.each([null, '', 'nope', 'toString', '__proto__'])('falls back to default for %j', (value) => {
    expect(resolveTheme(value)).toBe('default')
  })
})
