import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@/components/ui/message'

const meta = {
  title: 'UI/Message',
  component: Message,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { align: { control: 'inline-radio', options: ['start', 'end'] } },
  args: { align: 'start' },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-96">
      <Message {...args}>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Amaury</MessageHeader>
          <Bubble variant="secondary" align={args.align}>
            <BubbleContent>The garden is looking wonderful this morning.</BubbleContent>
          </Bubble>
          <MessageFooter>10:42</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
}

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="w-96">
      <Message>
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>Shall we restyle the whole kit?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>Yes, switch the theme from the toolbar.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
