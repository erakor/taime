import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, TerminalIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'destructive'] },
  },
  args: { variant: 'default', className: 'w-96' },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <TerminalIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>Please verify your billing information and try again.</AlertDescription>
    </Alert>
  ),
}
