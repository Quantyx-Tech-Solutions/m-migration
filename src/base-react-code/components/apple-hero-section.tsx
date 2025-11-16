'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function AppleHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Zoom Effect */}
        <div
          className="absolute inset-0 transition-transform duration-75"
          style={{
            transform: `scale(${1 + scrollProgress * 0.3})`,
            opacity: 1 - scrollProgress * 0.7,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/aerial-view-of-statue-of-liberty-new-york-city-sky.jpg" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollProgress * -100}px)`,
            opacity: 1 - scrollProgress * 1.5,
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight">
            Tu Nuevo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87b8c6] via-[#2e707b] to-[#0f3f4c]">
              Comienzo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto">
            Transformamos sueños en realidad. Expertos en inmigración con más de 15 años de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 rounded-full group"
            >
              Inicia Tu Proceso
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 rounded-full"
            >
              Conoce Más
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div
          className="absolute bottom-20 left-0 right-0 z-10"
          style={{
            opacity: 1 - scrollProgress * 2,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: '500+', label: 'Casos Exitosos' },
                { value: '98%', label: 'Aprobación' },
                { value: '15+', label: 'Años' },
                { value: '24/7', label: 'Soporte' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
