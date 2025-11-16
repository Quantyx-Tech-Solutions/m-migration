'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ConsultaFormPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Solicitud de consulta enviada exitosamente. Nos contactaremos contigo en menos de 24 horas.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/#forms">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Formularios
          </Button>
        </Link>

        <Card className="shadow-xl">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
            <div className="flex items-center space-x-3 mb-2">
              <MessageCircle className="w-8 h-8" />
              <CardTitle className="text-2xl">Consulta General</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/90">
              Evaluación de caso personalizada - Consulta gratuita
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input id="nombre" required placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input id="email" type="email" required placeholder="tu@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input id="telefono" type="tel" required placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="pais">País de origen *</Label>
                  <Input id="pais" required placeholder="País" />
                </div>
              </div>

              <div>
                <Label htmlFor="tipoServicio">Tipo de servicio que necesitas *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa-trabajo">Visa de Trabajo</SelectItem>
                    <SelectItem value="reunificacion">Reunificación Familiar</SelectItem>
                    <SelectItem value="vawa">VAWA - Protección</SelectItem>
                    <SelectItem value="visa-u">Visa U</SelectItem>
                    <SelectItem value="visa-t">Visa T</SelectItem>
                    <SelectItem value="green-card">Green Card</SelectItem>
                    <SelectItem value="ciudadania">Ciudadanía</SelectItem>
                    <SelectItem value="autorizacion-empleo">Autorización de Empleo</SelectItem>
                    <SelectItem value="otro">Otro / No estoy seguro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="situacion">
                  Describe brevemente tu situación *
                </Label>
                <Textarea
                  id="situacion"
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu caso, tus objetivos migratorios, y cualquier información relevante que nos ayude a entender tu situación..."
                />
              </div>

              <div>
                <Label htmlFor="urgencia">¿Qué tan urgente es tu caso?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Nivel de urgencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alta">Alta - Necesito ayuda inmediata</SelectItem>
                    <SelectItem value="media">Media - En las próximas semanas</SelectItem>
                    <SelectItem value="baja">Baja - Estoy explorando opciones</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="preferencia">
                  ¿Cómo prefieres que te contactemos?
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Método de contacto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telefono">Teléfono</SelectItem>
                    <SelectItem value="email">Correo electrónico</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ¿Qué esperar después?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Responderemos en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Evaluación inicial gratuita de tu caso</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Recomendación de los siguientes pasos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Información transparente sobre costos y tiempos</span>
                  </li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Solicitar Consulta Gratuita
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar este formulario, aceptas nuestra política de privacidad y
                nuestros términos de servicio.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
