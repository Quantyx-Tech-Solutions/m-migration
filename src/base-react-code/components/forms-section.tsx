'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FormsSection() {
  const forms = [
    {
      title: 'Formulario I-765',
      description: 'Solicitud de Autorización de Empleo',
      href: '/forms/i-765',
    },
    {
      title: 'Formulario VAWA',
      description: 'Visa para víctimas de abuso doméstico',
      href: '/forms/vawa',
    },
    {
      title: 'Formulario Visa T',
      description: 'Visa para víctimas de tráfico humano',
      href: '/forms/visa-t',
    },
    {
      title: 'Formulario Visa U',
      description: 'Visa para víctimas de crímenes',
      href: '/forms/visa-u',
    },
    {
      title: 'Formulario Visa C/U',
      description: 'Admisión anexo Visa para víctimas',
      href: '/forms/visa-cu',
    },
    {
      title: 'Consulta General',
      description: 'Evaluación de caso personalizada',
      href: '/forms/consulta',
    },
  ]

  return (
    <section id="forms" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Comienza Tu Proceso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Completa el formulario correspondiente a tu caso. Nuestro equipo lo
            revisará y te contactaremos para una consulta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {forms.map((form, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="w-8 h-8 text-primary" />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="group-hover:text-primary"
                    asChild
                  >
                    <Link href={form.href}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <CardTitle className="text-xl mt-4">{form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {form.description}
                </CardDescription>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={form.href}>Llenar Formulario</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿No estás seguro qué formulario necesitas?
          </p>
          <Button size="lg" variant="outline">
            Hablar con un Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
