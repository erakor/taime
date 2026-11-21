import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileTextIcon, ImageIcon, XIcon } from 'lucide-react'

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from '@/components/ui/attachment'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Attachment',
  component: Attachment,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    state: { control: 'select', options: ['idle', 'uploading', 'processing', 'error', 'done'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'xs'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { state: 'done', size: 'default', orientation: 'horizontal' },
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
}

export const Uploading: Story = {
  args: { state: 'uploading' },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-assets.zip</AttachmentTitle>
        <AttachmentDescription>Uploading...</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}

export const ErrorState: Story = {
  args: { state: 'error' },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia>
        <ImageIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>photo.png</AttachmentTitle>
        <AttachmentDescription>Upload failed</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: Default.render,
}

export const Group: Story = {
  render: (args) => (
    <AttachmentGroup className="w-96">
      {['notes.md', 'budget.xlsx', 'brief.pdf', 'logo.svg'].map((name) => (
        <Attachment key={name} {...args}>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{name}</AttachmentTitle>
            <AttachmentDescription>128 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  ),
}
