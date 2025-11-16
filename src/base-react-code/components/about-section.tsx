'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const benefits = [
    'Equipo de expertos certificados',
    'Asesoría personalizada en español',
    'Transparencia en costos y procesos',
    'Seguimiento constante de tu caso',
    'Experiencia en casos complejos',
    'Compromiso con tu éxito',
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprometidos con Tu Futuro en América
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              En M-Migration LLC, entendemos que cada caso es único. Con más de 15
              años de experiencia, hemos ayudado a cientos de familias a cumplir su
              sueño americano.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Nuestro equipo de profesionales certificados está dedicado a brindarte
              el mejor servicio, con transparencia, honestidad y compromiso en cada
              paso del proceso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg">Conoce Más Sobre Nosotros</Button>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <Image
                src="/professional-immigration-office-with-diverse-team-.jpg"
                alt="M-Migration LLC Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-UoBzkRHwDDOO1IgCMKx8LtI76y7Q6i.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">
                    Casos Aprobados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
