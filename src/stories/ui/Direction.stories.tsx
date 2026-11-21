import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { DirectionProvider } from '@/components/ui/direction'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: { dir: { control: 'inline-radio', options: ['ltr', 'rtl'] } },
  args: { dir: 'rtl' },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

/** Radix primitives below the provider read the direction (menus open on the matching side). */
export const Default: Story = {
  render: (args) => (
    <DirectionProvider dir={args.dir}>
      <div dir={args.dir}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  ),
}
