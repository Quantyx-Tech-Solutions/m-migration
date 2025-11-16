'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            ¿Listo para Comenzar Tu Camino?
          </h2>
          <p className="text-lg sm:text-xl mb-12 opacity-90 text-balance">
            No esperes más. Agenda tu consulta gratuita hoy mismo y da el primer
            paso hacia tu futuro en Estados Unidos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="group">
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Llamar Ahora
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>Consulta sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
