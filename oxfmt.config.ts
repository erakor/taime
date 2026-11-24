import base, { tailwind } from '@erakor/toolchain/oxfmt'

const config = { ...base, sortTailwindcss: tailwind('src/index.css') }

export default config
