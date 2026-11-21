import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Toaster {...args} />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: { label: 'Undo', onClick: () => {} },
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
}

export const Types: Story = {
  render: (args) => (
    <>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast.success('Saved successfully')}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info('Heads up')}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning('Careful now')}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
          Error
        </Button>
      </div>
    </>
  ),
}
