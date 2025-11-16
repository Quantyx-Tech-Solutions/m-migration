'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f3f4c] via-[#2e707b] to-[#87b8c6] py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            ¿Listo Para Comenzar?
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            Tu futuro en Estados Unidos está más cerca de lo que piensas.
            <br />
            Agenda tu consulta gratuita hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-white text-[#0f3f4c] hover:bg-white/90 rounded-full group font-bold"
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10 rounded-full"
            >
              Ver Todos Los Formularios
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">Llámanos</div>
                <div className="text-lg font-semibold">+1 (234) 567-890</div>
              </div>
            </a>

            <a
              href="mailto:info@m-migration.com"
              className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">Escríbenos</div>
                <div className="text-lg font-semibold">info@m-migration.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
