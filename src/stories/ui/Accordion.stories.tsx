import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  ['Is it accessible?', 'Yes. It adheres to the WAI-ARIA design pattern.'],
  ['Is it styled?', 'Yes. It comes with default styles that match the other components.'],
  ['Is it animated?', 'Yes. It is animated by default, but you can disable it.'],
]

export const Default: Story = {
  args: { type: 'single', collapsible: true, className: 'w-96' },
  render: (args) => (
    <Accordion {...args}>
      {items.map(([q, a], i) => (
        <AccordionItem key={q} value={`item-${i}`}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: { type: 'multiple', className: 'w-96' },
  render: (args) => (
    <Accordion {...args}>
      {items.map(([q, a], i) => (
        <AccordionItem key={q} value={`item-${i}`}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
