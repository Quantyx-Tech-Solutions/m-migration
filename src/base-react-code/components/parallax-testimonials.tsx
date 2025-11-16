'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Roberto Sánchez',
    role: 'Ingeniero Civil',
    text: 'La mejor decisión que tomé fue confiar en M-Migration. Su equipo me guió en cada paso y ahora trabajo en mi campo profesional en Estados Unidos.',
    rating: 5,
    image: '/professional-latino-man-headshot.png',
  },
  {
    name: 'Isabella Torres',
    role: 'Emprendedora',
    text: 'Gracias a su experiencia, pude traer a mi familia conmigo. El proceso fue claro y siempre estuvieron disponibles para responder mis dudas.',
    rating: 5,
    image: '/professional-latina-woman-headshot.png',
  },
  {
    name: 'Diego Morales',
    role: 'Chef',
    text: 'Después de años trabajando sin documentos, M-Migration me ayudó a regularizar mi situación. Ahora tengo mi propio restaurante.',
    rating: 5,
    image: '/chef-latino-man-portrait.jpg',
  },
]

export function ParallaxTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black to-[#0f3f4c]/30 py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollProgress * 100}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Lo Que Dicen
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87b8c6] to-[#2e707b]">
              Nuestros Clientes
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => {
            const cardProgress = Math.min(1, Math.max(0, (scrollProgress - idx * 0.1) * 3))
            
            return (
              <div
                key={idx}
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 80}px) rotateX(${(1 - cardProgress) * 10}deg)`,
                }}
              >
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#87b8c6]/20 group">
                  {/* Quote Mark */}
                  <div className="text-8xl text-[#87b8c6]/20 font-serif absolute top-4 left-4">
                    "
                  </div>

                  <div className="relative z-10 pt-8">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#87b8c6] text-[#87b8c6]" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#87b8c6]"
                      />
                      <div>
                        <div className="text-white font-bold">{testimonial.name}</div>
                        <div className="text-white/60 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
