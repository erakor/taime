import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const slides = Array.from({ length: 5 }, (_, i) => i + 1)

export const Default: Story = {
  render: (args) => (
    <div className="px-12">
      <Carousel className="w-full max-w-xs" {...args}>
        <CarouselContent>
          {slides.map((n) => (
            <CarouselItem key={n}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{n}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const MultipleItems: Story = {
  render: (args) => (
    <div className="px-12">
      <Carousel opts={{ align: 'start' }} className="w-full max-w-sm" {...args}>
        <CarouselContent>
          {slides.map((n) => (
            <CarouselItem key={n} className="basis-1/2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-3xl font-semibold">{n}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="py-12">
      <Carousel
        orientation="vertical"
        opts={{ align: 'start' }}
        className="w-full max-w-xs"
        {...args}
      >
        <CarouselContent className="-mt-1 h-48">
          {slides.map((n) => (
            <CarouselItem key={n} className="pt-1 md:basis-1/2">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{n}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
