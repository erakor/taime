import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheckIcon, ChevronRightIcon, InboxIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'muted'] },
    size: { control: 'inline-radio', options: ['default', 'sm'] },
  },
  args: { variant: 'outline', size: 'default' },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item className="w-96" {...args}>
      <ItemMedia variant="icon">
        <BadgeCheckIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security checkup</ItemTitle>
        <ItemDescription>Review your account protections.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Group: Story = {
  render: (args) => (
    <ItemGroup className="w-96">
      {['Inbox', 'Drafts', 'Sent'].map((name, i) => (
        <div key={name}>
          {i > 0 && <ItemSeparator />}
          <Item {...args}>
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{name}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Item>
        </div>
      ))}
    </ItemGroup>
  ),
}
