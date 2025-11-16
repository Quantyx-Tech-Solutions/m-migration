'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, FileText, Search, UserCheck, Plane } from 'lucide-react'

export function ProcessTimeline() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Consulta Inicial',
      description:
        'Evaluamos tu caso y determinamos la mejor estrategia migratoria para ti.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Análisis de Documentos',
      description:
        'Revisamos y preparamos toda la documentación necesaria para tu solicitud.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Presentación de Caso',
      description:
        'Presentamos tu solicitud ante las autoridades migratorias correspondientes.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Seguimiento',
      description:
        'Monitoreamos constantemente el estatus de tu caso y te mantenemos informado.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Aprobación',
      description:
        'Celebramos contigo cuando tu visa es aprobada. ¡Tu sueño se hace realidad!',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Un camino claro y estructurado hacia tu objetivo migratorio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                      >
                        {step.icon}
                      </div>
                      <div className="text-4xl font-bold text-primary/20 mb-2">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
