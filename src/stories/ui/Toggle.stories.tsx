import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon, ItalicIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'default', size: 'default', 'aria-label': 'Toggle italic' },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <BoldIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args) => (
    <Toggle {...args}>
      <ItalicIcon /> Italic
    </Toggle>
  ),
}

export const Disabled: Story = { args: { disabled: true }, render: Default.render }
