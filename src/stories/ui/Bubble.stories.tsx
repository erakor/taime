import type { Meta, StoryObj } from '@storybook/react-vite'

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from '@/components/ui/bubble'

const meta = {
  title: 'UI/Bubble',
  component: Bubble,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
    },
    align: { control: 'inline-radio', options: ['start', 'end'] },
  },
  args: { variant: 'default', align: 'start' },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex w-96">
      <Bubble {...args}>
        <BubbleContent>Hey, are we still on for the tea ceremony tomorrow?</BubbleContent>
      </Bubble>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <BubbleGroup className="w-96">
      {(
        ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const
      ).map((variant) => (
        <Bubble key={variant} variant={variant}>
          <BubbleContent>{variant}</BubbleContent>
        </Bubble>
      ))}
    </BubbleGroup>
  ),
}

export const WithReactions: Story = {
  render: () => (
    <div className="flex w-96 pb-4">
      <Bubble variant="secondary">
        <BubbleContent>Sounds perfect.</BubbleContent>
        <BubbleReactions>👍 2</BubbleReactions>
      </Bubble>
    </div>
  ),
}
