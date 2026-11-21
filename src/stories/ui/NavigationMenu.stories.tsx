import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'UI/Navigation Menu',
  component: NavigationMenu,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const links = [
  ['Alert Dialog', 'A modal dialog that interrupts the user.'],
  ['Hover Card', 'Preview content available behind a link.'],
  ['Progress', 'Displays an indicator showing completion progress.'],
]

export const Default: Story = {
  render: (args) => (
    <div className="min-h-64">
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-96 gap-2 p-2">
                {links.map(([title, description]) => (
                  <li key={title}>
                    <NavigationMenuLink href="#nav">
                      <div className="font-medium">{title}</div>
                      <p className="text-muted-foreground">{description}</p>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#docs" className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
