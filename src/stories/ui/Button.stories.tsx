import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon, MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: { children: 'Button', variant: 'default', size: 'default' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>Default</Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="xs">
        Extra small
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon" aria-label="Mail">
        <MailIcon />
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <MailIcon /> Login with Email
    </Button>
  ),
}

export const IconOnly: Story = {
  args: { variant: 'outline', size: 'icon' },
  render: (args) => (
    <Button {...args} aria-label="Next">
      <ArrowRightIcon />
    </Button>
  ),
}

export const Loading: Story = {
  args: { disabled: true },
  render: (args) => (
    <Button {...args}>
      <Spinner /> Please wait
    </Button>
  ),
}

export const AsChild: Story = {
  render: (args) => (
    <Button {...args} asChild>
      <a href="#button">Rendered as a link</a>
    </Button>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}
