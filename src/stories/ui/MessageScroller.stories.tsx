import type { Meta, StoryObj } from '@storybook/react-vite'

import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Message, MessageContent } from '@/components/ui/message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller'

const meta = {
  title: 'UI/Message Scroller',
  component: MessageScroller,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

const messages = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  mine: i % 2 === 1,
  text: i % 2 === 1 ? `Reply number ${i + 1}` : `Message number ${i + 1} from the other side`,
}))

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 w-96 rounded-lg border">
        <MessageScrollerViewport className="p-4">
          <MessageScrollerContent className="gap-4">
            {messages.map((m) => (
              <MessageScrollerItem key={m.id} scrollAnchor={m.id === messages.length - 1}>
                <Message align={m.mine ? 'end' : 'start'}>
                  <MessageContent>
                    <Bubble
                      variant={m.mine ? 'default' : 'secondary'}
                      align={m.mine ? 'end' : 'start'}
                    >
                      <BubbleContent>{m.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
