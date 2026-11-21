import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const items = [
  { title: 'Home', icon: HomeIcon, active: true },
  { title: 'Inbox', icon: InboxIcon, badge: '12' },
  { title: 'Calendar', icon: CalendarIcon },
  { title: 'Search', icon: SearchIcon },
  { title: 'Settings', icon: SettingsIcon },
]

function SidebarDemo({
  collapsible,
  variant,
}: {
  collapsible?: 'offcanvas' | 'icon' | 'none'
  variant?: 'sidebar' | 'floating' | 'inset'
}) {
  return (
    <SidebarProvider
      className="min-h-[32rem]"
      style={{ '--sidebar-width': '14rem' } as React.CSSProperties}
    >
      <Sidebar collapsible={collapsible} variant={variant} className="absolute">
        <SidebarHeader>
          <div className="px-2 py-1 text-sm font-semibold">Zen Garden</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 text-xs text-muted-foreground">v1.0</div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </header>
        <div className="p-4 text-sm text-muted-foreground">Main content area.</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const meta = {
  title: 'UI/Sidebar',
  component: SidebarDemo,
  parameters: { layout: 'fullscreen', controls: { disable: false } },
  argTypes: {
    collapsible: { control: 'inline-radio', options: ['offcanvas', 'icon', 'none'] },
    variant: { control: 'inline-radio', options: ['sidebar', 'floating', 'inset'] },
  },
  args: { collapsible: 'offcanvas', variant: 'sidebar' },
} satisfies Meta<typeof SidebarDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const IconCollapsible: Story = { args: { collapsible: 'icon' } }

export const Floating: Story = { args: { variant: 'floating' } }

export const Inset: Story = { args: { variant: 'inset' } }
