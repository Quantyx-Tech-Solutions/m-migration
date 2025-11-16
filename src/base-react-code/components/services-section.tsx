'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Users, Heart, Shield, Briefcase, Home } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Visas de Trabajo',
      description: 'H-1B, L-1, O-1 y más. Te ayudamos a obtener tu visa de trabajo profesional.',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Reunificación Familiar',
      description: 'Peticiones familiares, Green Cards y ciudadanía para reunir a tu familia.',
      color: 'from-teal-500/10 to-teal-600/10',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'VAWA - Protección',
      description: 'Visa especial para víctimas de abuso doméstico y violencia.',
      color: 'from-rose-500/10 to-rose-600/10',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Visa U y T',
      description: 'Protección para víctimas de crímenes y tráfico humano.',
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Autorización de Empleo',
      description: 'Formulario I-765 y permisos de trabajo para diferentes categorías.',
      color: 'from-amber-500/10 to-amber-600/10',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residencia Permanente',
      description: 'Green Card por empleo, familia o inversión.',
      color: 'from-green-500/10 to-green-600/10',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ofrecemos una amplia gama de servicios migratorios especializados para
            ayudarte a alcanzar tus metas en Estados Unidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <CardHeader className="relative">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
