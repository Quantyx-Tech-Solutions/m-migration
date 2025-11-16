'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, UserCheck, Clock, CheckCircle } from 'lucide-react'

export function ProcessReveal() {
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

  const steps = [
    {
      icon: FileText,
      title: 'Consulta Inicial',
      description: 'Analizamos tu caso y determinamos la mejor estrategia legal para ti',
      color: '#87b8c6',
    },
    {
      icon: UserCheck,
      title: 'Preparación',
      description: 'Recopilamos documentos y preparamos tu expediente con atención al detalle',
      color: '#2e707b',
    },
    {
      icon: Clock,
      title: 'Presentación',
      description: 'Enviamos tu solicitud y hacemos seguimiento constante del proceso',
      color: '#0f3f4c',
    },
    {
      icon: CheckCircle,
      title: 'Aprobación',
      description: 'Celebramos juntos cuando recibes la respuesta positiva',
      color: '#87b8c6',
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-black py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Simple, transparente y diseñado para tu tranquilidad
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const stepProgress = Math.min(1, Math.max(0, (scrollProgress - idx * 0.15) * 4))
            const lineProgress = Math.min(1, Math.max(0, (scrollProgress - idx * 0.15 - 0.1) * 4))

            return (
              <div key={idx} className="relative">
                <div className="flex items-center gap-8 mb-16">
                  {/* Number and Icon */}
                  <div
                    className="flex-shrink-0 relative"
                    style={{
                      opacity: stepProgress,
                      transform: `scale(${0.8 + stepProgress * 0.2})`,
                    }}
                  >
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                      }}
                    >
                      <Icon className="w-12 h-12 text-white" />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-xl"
                        style={{ color: step.color }}
                      >
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1"
                    style={{
                      opacity: stepProgress,
                      transform: `translateX(${(1 - stepProgress) * 50}px)`,
                    }}
                  >
                    <h3 className="text-4xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-16 top-32 w-0.5 h-16 bg-white/10 overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-b from-[#87b8c6] to-[#2e707b]"
                      style={{
                        height: '100%',
                        transform: `scaleY(${lineProgress})`,
                        transformOrigin: 'top',
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
