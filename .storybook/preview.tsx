import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '../src/index.css'
import { ZEN_THEMES } from '../src/themes'

// addon-themes expects { toolbarName: attributeValue }.
const themes = Object.fromEntries(Object.values(ZEN_THEMES).map((t) => [t.label, t.id]))

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
  decorators: [
    withThemeByDataAttribute({
      themes,
      defaultTheme: ZEN_THEMES.default.label,
      attributeName: 'data-zen-theme',
    }),
  ],
}

export default preview
