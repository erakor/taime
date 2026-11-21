import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered', controls: { disable: false } },
  args: { id: 'terms', disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} />
      <Label htmlFor={args.id}>Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: { defaultChecked: true },
  render: Default.render,
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
