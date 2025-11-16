'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const successStories = [
  {
    name: 'María González',
    country: 'México',
    visa: 'Visa U',
    image: '/happy-latina-woman-holding-visa-approval-letter.jpg',
    quote: 'Después de años de incertidumbre, M-Migration me ayudó a obtener mi visa. Ahora trabajo legalmente y mi familia está segura.',
  },
  {
    name: 'Carlos Ramírez',
    country: 'El Salvador',
    visa: 'I-765',
    image: '/latin-man-smiling-in-professional-setting.jpg',
    quote: 'El proceso fue más rápido de lo que esperaba. Excelente atención y seguimiento constante de mi caso.',
  },
  {
    name: 'Ana Martínez',
    country: 'Guatemala',
    visa: 'VAWA',
    image: '/woman-with-children-happy-family-portrait.jpg',
    quote: 'Me dieron esperanza cuando más lo necesitaba. Gracias a su profesionalismo, mis hijos y yo tenemos un futuro seguro.',
  },
  {
    name: 'Luis Fernández',
    country: 'Honduras',
    visa: 'Visa T',
    image: '/confident-latin-man-in-business-casual.jpg',
    quote: 'Su experiencia marcó la diferencia. Me guiaron paso a paso y ahora puedo trabajar y contribuir a mi comunidad.',
  },
  {
    name: 'Patricia Silva',
    country: 'Venezuela',
    visa: 'Consulta',
    image: '/professional-latina-woman-smiling-office.jpg',
    quote: 'La consulta inicial fue increíble. Me explicaron todas mis opciones y creamos un plan personalizado.',
  },
]

export function HorizontalCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0f3f4c]/20 to-black py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Historias de Éxito
            </h2>
            <p className="text-xl text-white/70">
              Conoce a quienes ya lograron su sueño americano
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <Button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 border-white/20 text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 border-white/20 text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-8 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="w-20 flex-shrink-0" />
        {successStories.map((story, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#87b8c6] to-[#2e707b] text-white text-sm font-semibold mb-4">
                  {story.visa}
                </div>
                <p className="text-white/90 text-lg mb-6 leading-relaxed italic">
                  "{story.quote}"
                </p>
                <div>
                  <div className="text-white font-bold text-xl">{story.name}</div>
                  <div className="text-white/70">{story.country}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-20 flex-shrink-0" />
      </div>
    </section>
  )
}
