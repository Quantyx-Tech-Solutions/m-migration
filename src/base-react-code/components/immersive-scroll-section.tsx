'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Users, Award, Clock } from 'lucide-react'

export function ImmersiveScrollSection() {
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

  const services = [
    {
      icon: Shield,
      title: 'Protección Legal',
      description: 'Asesoría especializada en VAWA, Visa U y protección humanitaria',
      color: 'from-[#87b8c6] to-[#2e707b]',
    },
    {
      icon: Users,
      title: 'Reunificación Familiar',
      description: 'Ayudamos a reunir a familias separadas por fronteras',
      color: 'from-[#2e707b] to-[#0f3f4c]',
    },
    {
      icon: Award,
      title: 'Permisos de Trabajo',
      description: 'Tramitación eficiente de formularios I-765 y autorizaciones',
      color: 'from-[#0f3f4c] to-[#87b8c6]',
    },
    {
      icon: Clock,
      title: 'Proceso Acelerado',
      description: 'Reducimos tiempos de espera con gestión profesional',
      color: 'from-[#87b8c6] to-[#0f3f4c]',
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-black py-32 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(135, 184, 198, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(135, 184, 198, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollProgress * -100}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{
              opacity: Math.min(1, scrollProgress * 3),
              transform: `translateY(${Math.max(0, (1 - scrollProgress * 3) * 50)}px)`,
            }}
          >
            Servicios de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87b8c6] to-[#0f3f4c]">
              {' '}Excelencia
            </span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-3xl mx-auto"
            style={{
              opacity: Math.min(1, (scrollProgress - 0.1) * 3),
              transform: `translateY(${Math.max(0, (1 - (scrollProgress - 0.1) * 3) * 50)}px)`,
            }}
          >
            Cada caso es único. Ofrecemos soluciones personalizadas con el más alto nivel de profesionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon
            const cardProgress = Math.min(1, Math.max(0, (scrollProgress - idx * 0.1) * 4))

            return (
              <div
                key={idx}
                className="group relative"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 100}px)`,
                }}
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-[#87b8c6]/20">
                  {/* Gradient Orb */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150`}
                  />

                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed">{service.description}</p>
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
