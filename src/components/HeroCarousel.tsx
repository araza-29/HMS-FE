"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carouselItems = [
  {
    title: "Expert Medical Care",
    description: "24/7 emergency services with experienced healthcare professionals",
    icon: "🏥",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment and diagnostic facilities",
    icon: "⚕️",
  },
  {
    title: "Patient-Centered Approach",
    description: "Personalized treatment plans tailored to your needs",
    icon: "❤️",
  },
  {
    title: "Comprehensive Services",
    description: "From general health to specialized medical departments",
    icon: "🩺",
  },
  {
    title: "Trusted Healthcare",
    description: "Years of excellence in providing quality medical care",
    icon: "⭐",
  },
]

export function HeroCarousel() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-6 py-6">
      <Carousel className="w-[95vw] h-[90vh]">
        <CarouselContent className="h-full">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-full">
                <Card className="border-2 border-[var(--theme-primary)]/20 h-full">
                  <CardContent 
                    className="flex flex-col items-center justify-center h-full bg-secondary p-12"
                    style={{ fontFamily: 'var(--theme-font-body)' }}
                  >
                    <div className="text-9xl mb-8">{item.icon}</div>
                    <h3 
                      className="text-5xl font-bold mb-6 text-[var(--theme-primary)] text-center"
                      style={{ fontFamily: 'var(--theme-font-heading)' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-2xl text-secondary-foreground text-center max-w-3xl"
                      style={{ fontFamily: 'var(--theme-font-body)' }}
                    >
                      {item.description}
                    </p>
                    <div className="mt-8 flex items-center space-x-2 text-[var(--theme-primary)]">
                      <span className="text-lg font-semibold">Slide {index + 1} of {carouselItems.length}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[var(--theme-primary)] text-white hover:bg-[var(--theme-primary)]/80 w-14 h-14 text-xl" />
        <CarouselNext className="bg-[var(--theme-primary)] text-white hover:bg-[var(--theme-primary)]/80 w-14 h-14 text-xl" />
      </Carousel>
    </div>
  )
}
