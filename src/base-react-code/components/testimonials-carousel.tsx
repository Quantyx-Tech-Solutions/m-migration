'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'María González',
      country: 'México',
      visa: 'Green Card',
      rating: 5,
      image: '/professional-latina-woman-smiling.png',
      text: 'M-Migration me ayudó a obtener mi Green Card en tiempo récord. El equipo es profesional, atento y siempre estuvo disponible para responder mis dudas. Recomiendo sus servicios al 100%.',
    },
    {
      name: 'Carlos Rodríguez',
      country: 'Colombia',
      visa: 'Visa H-1B',
      rating: 5,
      image: '/professional-latino-man-smiling.jpg',
      text: 'Gracias a M-Migration conseguí mi visa de trabajo. Todo el proceso fue transparente y me mantuvieron informado en cada paso. Son expertos en lo que hacen.',
    },
    {
      name: 'Ana Martínez',
      country: 'Venezuela',
      visa: 'VAWA',
      rating: 5,
      image: '/professional-woman-smiling.png',
      text: 'En un momento difícil de mi vida, M-Migration me brindó el apoyo legal que necesitaba. Su equipo es compasivo, profesional y realmente se preocupa por sus clientes.',
    },
    {
      name: 'José Hernández',
      country: 'El Salvador',
      visa: 'Visa U',
      rating: 5,
      image: '/professional-man-smiling.png',
      text: 'El proceso de mi Visa U fue manejado con total profesionalismo. M-Migration me guió en cada paso y logré obtener mi visa. Estoy eternamente agradecido.',
    },
    {
      name: 'Lucía Fernández',
      country: 'Perú',
      visa: 'Reunificación Familiar',
      rating: 5,
      image: '/professional-woman-happy.jpg',
      text: 'Después de años separada de mi familia, M-Migration hizo posible nuestra reunificación. El equipo trabajó incansablemente en mi caso. Los recomiendo con los ojos cerrados.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Historias de Éxito
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-balance">
            Descubre cómo hemos ayudado a cientos de personas a alcanzar su sueño americano
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-none bg-white/10 backdrop-blur-md text-white">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 mb-6 opacity-50" />
                
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className="text-center md:text-left">
                    <div className="flex gap-1 mb-2 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-white/80">
                      {testimonials[currentIndex].country} • {testimonials[currentIndex].visa}
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-white/90 mb-8">
                  {testimonials[currentIndex].text}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrev}
                    className="text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? 'w-8 bg-white'
                            : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="text-white hover:bg-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
