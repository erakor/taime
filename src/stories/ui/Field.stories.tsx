import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: { layout: 'centered', controls: { disable: false } },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal', 'responsive'] },
  },
  args: { orientation: 'vertical' },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Field {...args}>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
    </div>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <div className="w-80">
      <Field {...args}>
        <Checkbox id="field-terms" />
        <FieldContent>
          <FieldLabel htmlFor="field-terms">Accept terms</FieldLabel>
          <FieldDescription>You agree to our terms of service.</FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
}

export const FormLayout: Story = {
  render: () => (
    <form className="w-96">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Tell us a little about yourself.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="field-name">Name</FieldLabel>
              <Input id="field-name" placeholder="Evil Rabbit" />
            </Field>
            <Field>
              <FieldLabel htmlFor="field-bio">Bio</FieldLabel>
              <Textarea id="field-bio" placeholder="Write a short bio" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator>or</FieldSeparator>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}
