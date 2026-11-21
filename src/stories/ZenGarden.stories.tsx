import type { Meta, StoryObj } from '@storybook/react-vite'

import { ZenCanvas } from '@/components/ZenCanvas'

const meta = {
  title: 'Zen Garden/Canvas',
  component: ZenCanvas,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ZenCanvas>

export default meta
type Story = StoryObj<typeof meta>

/** Switch themes from the toolbar paintbrush: the whole canvas restyles live. */
export const Showcase: Story = {}
