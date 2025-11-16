'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, Shield, Users, Briefcase, Home, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const forms = [
  {
    icon: Briefcase,
    title: 'Formulario I-765',
    description: 'Permiso de trabajo',
    color: 'from-[#87b8c6] to-[#2e707b]',
    href: '/forms/i-765',
  },
  {
    icon: Shield,
    title: 'VAWA',
    description: 'Protección para víctimas',
    color: 'from-[#2e707b] to-[#0f3f4c]',
    href: '/forms/vawa',
  },
  {
    icon: Users,
    title: 'Visa T',
    description: 'Víctimas de tráfico',
    color: 'from-[#0f3f4c] to-[#87b8c6]',
    href: '/forms/visa-t',
  },
  {
    icon: Home,
    title: 'Visa U',
    description: 'Víctimas de crímenes',
    color: 'from-[#87b8c6] to-[#0f3f4c]',
    href: '/forms/visa-u',
  },
  {
    icon: FileText,
    title: 'Visa C/U',
    description: 'Cuestionario C/U',
    color: 'from-[#2e707b] to-[#87b8c6]',
    href: '/forms/visa-cu',
  },
  {
    icon: HelpCircle,
    title: 'Consulta',
    description: 'Solicita asesoría',
    color: 'from-[#0f3f4c] to-[#2e707b]',
    href: '/forms/consulta',
  },
]

export function FormsShowcase() {
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
    <section ref={sectionRef} className="relative bg-black py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollProgress * 20}% ${50 - scrollProgress * 20}%, #87b8c6 0%, transparent 50%),
                        radial-gradient(circle at ${50 - scrollProgress * 20}% ${50 + scrollProgress * 20}%, #2e707b 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Comienza Tu Proceso
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Llena el formulario que aplique a tu caso y nos pondremos en contacto contigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {forms.map((form, idx) => {
            const Icon = form.icon
            const cardProgress = Math.min(1, Math.max(0, (scrollProgress - idx * 0.05) * 4))

            return (
              <Link
                key={idx}
                href={form.href}
                className="group"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 50}px)`,
                }}
              >
                <div className="relative h-64 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${form.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{form.title}</h3>
                    <p className="text-white/80 mb-6">{form.description}</p>
                    
                    <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                      Llenar formulario
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
