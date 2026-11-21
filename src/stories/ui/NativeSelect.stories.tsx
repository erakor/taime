import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@/components/ui/native-select'

const meta = {
  title: 'UI/Native Select',
  component: NativeSelect,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { disabled: { control: 'boolean' } },
  args: { className: 'w-56' },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Grouped: Story = {
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
