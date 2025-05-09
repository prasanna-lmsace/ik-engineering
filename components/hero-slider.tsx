"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Slide data - in a real app, this might come from a CMS or API
const slides = [
  {
    id: 1,
    image: "/murukku-production-machine.png",
    title: "Industry-Leading CNG-Powered Machinery",
    description: "Innovative solutions for efficient and eco-friendly manufacturing operations",
    cta: "Explore Our Products",
    ctaLink: "/products",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=1200&width=1800&query=food production machinery in factory",
    title: "Specialized Food Production Equipment",
    description: "Custom machines designed for Murukku and other specialty food manufacturing",
    cta: "View Food Machines",
    ctaLink: "/products/food-machines",
  },
  {
    id: 3,
    image: "/industrial-technicians.png",
    title: "Expert Engineering & Support",
    description: "Comprehensive maintenance and technical services for all our machinery",
    cta: "Our Services",
    ctaLink: "/services",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Image background */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center z-10">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.description}</p>
                <Button asChild size="lg">
                  <Link href={slide.ctaLink}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
