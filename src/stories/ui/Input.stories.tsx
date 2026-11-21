import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'file'] },
    disabled: { control: 'boolean' },
  },
  args: { type: 'text', placeholder: 'Type here...', className: 'w-72' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" {...args} placeholder="Email" />
    </div>
  ),
}

export const File: Story = {
  args: { type: 'file' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'not-an-email' },
}
