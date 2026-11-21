# Zen Garden (React edition)

One immutable React tree (`src/components/ZenCanvas.tsx`), infinite looks via CSS only.

- `npm run storybook` then use the paintbrush toolbar to switch themes.
- `npm run dev` then open `/?theme=editorial` (or `neo-brutalist`, `cyber-glass`).

## Add a theme (no JSX edits)
1. Create `src/themes/<name>.css`, scoping every selector to `[data-zen-theme="<name>"]`
   (tokens on `:root[data-zen-theme=...]`, slots via `[data-slot=...]`, layout via `grid-template-areas` on `[data-zen-stage]`).
2. `import './<name>.css'` in `src/themes/index.ts`.
3. Add an entry to `ZEN_THEMES` in the same file.
