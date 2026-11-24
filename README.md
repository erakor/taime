# Zen Garden (React edition)

One immutable React tree (`src/components/ZenCanvas.tsx`), infinite looks via CSS only.

- `pnpm storybook` then use the paintbrush toolbar to switch themes.
- `pnpm dev` then open `/?theme=editorial` (or `neo-brutalist`, `cyber-glass`, `ligne-claire`, `wizarding-ledger`, `pixel-quest`).

## Add a theme (no JSX edits)

1. Create `src/themes/<name>.css`, scoping every selector to `[data-zen-theme="<name>"]`
   (tokens on `:root[data-zen-theme=...]`, slots via `[data-slot=...]`, layout via `grid-template-areas` on `[data-zen-stage]`).
2. `import './<name>.css'` in `src/themes/index.ts`.
3. Add an entry to `ZEN_THEMES` in the same file.

## Checks

`pnpm typecheck && pnpm lint && pnpm format:check && pnpm knip && pnpm test`, the same scripts CI
runs through `erakor/toolchain`'s `node-checks.yml`. Knip skips unused exports in
`src/components/ui` (vendored shadcn components export more than the app uses).
