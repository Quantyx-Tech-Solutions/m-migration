'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 20

      heroRef.current.style.transform = `translate(${xPercent}px, ${yPercent}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/aerial-view-statue-of-liberty-new-york.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/85" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div
          ref={heroRef}
          className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              Tu Camino Hacia el Sueño Americano
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100 text-balance">
            Hacemos Realidad Tu
            <span className="text-white block drop-shadow-lg">Sueño Americano</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 text-balance drop-shadow-md">
            Servicios profesionales de inmigración con experiencia y dedicación.
            Te acompañamos en cada paso del proceso migratorio hacia Estados Unidos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Ver Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-400">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80 mt-1">
                Casos Exitosos
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white/80 mt-1">
                Años de Experiencia
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80 mt-1">
                Tasa de Aprobación
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80 mt-1">
                Atención al Cliente
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
