import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { value: 60, className: 'w-72' },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Complete: Story = { args: { value: 100 } }
