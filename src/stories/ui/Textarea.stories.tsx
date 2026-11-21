import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { disabled: { control: 'boolean' } },
  args: { placeholder: 'Type your message here.', className: 'w-80' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="textarea-message">Your message</Label>
      <Textarea id="textarea-message" {...args} />
    </div>
  ),
}

export const Disabled: Story = { args: { disabled: true } }
