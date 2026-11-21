import type { Meta, StoryObj } from '@storybook/react-vite'
import { SparklesIcon } from 'lucide-react'

import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'

const meta = {
  title: 'UI/Marker',
  component: Marker,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'separator', 'border'] } },
  args: { variant: 'separator', className: 'w-96' },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Marker {...args}>
      <MarkerContent>Today</MarkerContent>
    </Marker>
  ),
}

export const WithIcon: Story = {
  args: { variant: 'default' },
  render: (args) => (
    <Marker {...args}>
      <MarkerIcon>
        <SparklesIcon />
      </MarkerIcon>
      <MarkerContent>Conversation summarized</MarkerContent>
    </Marker>
  ),
}

export const Border: Story = {
  args: { variant: 'border' },
  render: Default.render,
}
