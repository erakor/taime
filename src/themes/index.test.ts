import { readFileSync } from 'node:fs'
import postcss, { type AtRule } from 'postcss'
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

  describe.each(themes.filter(([id]) => id !== 'default'))('%s', (id) => {
    it('is imported by the manifest', () => {
      expect(read('./index.ts')).toContain(`import './${id}.css'`)
    })

    it('scopes every selector to its data-zen-theme', () => {
      const scope = new RegExp(`^(:root)?\\[data-zen-theme=(['"])${id}\\2\\]`)
      const unscoped: string[] = []
      postcss.parse(read(`./${id}.css`)).walkRules((rule) => {
        const parent = rule.parent
        if (parent?.type === 'atrule' && (parent as AtRule).name.endsWith('keyframes')) return
        unscoped.push(...rule.selectors.filter((selector) => !scope.test(selector)))
      })
      expect(unscoped).toEqual([])
    })
  })
})

describe('resolveTheme', () => {
  it('returns a known theme', () => {
    expect(resolveTheme('editorial')).toBe('editorial')
  })

  it.each([null, '', 'nope', 'toString', '__proto__'])('falls back to default for %j', (value) => {
    expect(resolveTheme(value)).toBe('default')
  })
})
