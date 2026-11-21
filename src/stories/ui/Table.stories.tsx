import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250 },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: 150 },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350 },
]

export const Default: Story = {
  render: (args) => (
    <div className="w-[34rem]">
      <Table {...args}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell className="font-medium">{inv.id}</TableCell>
              <TableCell>{inv.status}</TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right">${inv.amount}.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
}
