import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

function Single() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 5, 15))
  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

function Range() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 5, 10),
    to: new Date(2026, 5, 18),
  })
  return (
    <Calendar
      mode="range"
      defaultMonth={range?.from}
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  )
}

export const Default: Story = { render: () => <Single /> }

export const RangeSelection: Story = { render: () => <Range /> }

export const DropdownCaption: Story = {
  render: () => (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      defaultMonth={new Date(2026, 5, 1)}
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      className="rounded-md border"
    />
  ),
}
