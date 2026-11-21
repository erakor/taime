import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'

const meta = {
  title: 'UI/Button Group',
  component: ButtonGroup,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { orientation: 'horizontal' },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: Default.render,
}

export const WithSeparatorAndText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>Sort by</ButtonGroupText>
      <Button variant="outline">Date</Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="More">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}
