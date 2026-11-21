import type { Meta, StoryObj } from '@storybook/react-vite'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

function OTPDemo({ digitsOnly = false }: { digitsOnly?: boolean }) {
  return (
    <InputOTP maxLength={6} pattern={digitsOnly ? REGEXP_ONLY_DIGITS : undefined}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

const meta = {
  title: 'UI/Input OTP',
  component: OTPDemo,
  parameters: { layout: 'centered', controls: { disable: false } },
  args: { digitsOnly: false },
} satisfies Meta<typeof OTPDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DigitsOnly: Story = { args: { digitsOnly: true } }
