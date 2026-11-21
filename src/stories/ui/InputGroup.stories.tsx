import type { Meta, StoryObj } from '@storybook/react-vite'
import { CopyIcon, SearchIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

const meta = {
  title: 'UI/Input Group',
  component: InputGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup className="w-80" {...args}>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextAndButton: Story = {
  render: (args) => (
    <InputGroup className="w-80" {...args}>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Copy" size="icon-xs">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextarea: Story = {
  render: (args) => (
    <InputGroup className="w-80" {...args}>
      <InputGroupTextarea placeholder="Ask, search or chat..." />
      <InputGroupAddon align="block-end">
        <InputGroupText>0 / 280</InputGroupText>
        <InputGroupButton variant="default" size="sm" className="ml-auto">
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
