import shadcn from '@erakor/toolchain/knip/shadcn'

// playwright is used by erakor-storybook-smoke (from the toolchain), which knip cannot follow.
const config = { ...shadcn, ignoreDependencies: ['playwright'] }

export default config
