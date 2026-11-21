import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '../src/index.css'
import { ZEN_THEME_LABELS } from '../src/themes'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: ZEN_THEME_LABELS,
      defaultTheme: 'default',
      attributeName: 'data-zen-theme',
    }),
  ],
}

export default preview
