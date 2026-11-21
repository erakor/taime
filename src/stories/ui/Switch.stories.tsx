import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    size: { control: 'inline-radio', options: ['default', 'sm'] },
    disabled: { control: 'boolean' },
  },
  args: { id: 'airplane-mode' },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} />
      <Label htmlFor={args.id}>Airplane mode</Label>
    </div>
  ),
}

export const Checked: Story = { args: { defaultChecked: true }, render: Default.render }

export const Disabled: Story = { args: { disabled: true }, render: Default.render }
