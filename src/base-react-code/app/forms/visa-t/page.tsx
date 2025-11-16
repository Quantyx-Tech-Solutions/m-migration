'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function VisaTFormPage() {
  const [showCoopDetails, setShowCoopDetails] = useState(false)
  const [showFearDetails, setShowFearDetails] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario Visa T enviado exitosamente. Nos contactaremos contigo pronto.')
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
          <CardHeader className="bg-purple-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="w-8 h-8" />
              <CardTitle className="text-2xl">Formulario Visa T</CardTitle>
            </div>
            <CardDescription className="text-white/90">
              Solicitud de visa para víctimas de tráfico humano
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información de la Víctima */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre la Víctima
                </h3>
                
                <div>
                  <Label htmlFor="nombreCompleto">Nombre completo del solicitante *</Label>
                  <Input id="nombreCompleto" required placeholder="Nombre Completo" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fechaNacimiento">Fecha de nacimiento *</Label>
                    <Input id="fechaNacimiento" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="lugarNacimiento">Lugar de nacimiento *</Label>
                    <Input id="lugarNacimiento" required placeholder="Ciudad, País" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="direccionActual">Dirección actual *</Label>
                  <Input id="direccionActual" required placeholder="Dirección completa" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" type="tel" required placeholder="Número de teléfono" />
                  </div>
                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="email@ejemplo.com" />
                  </div>
                </div>
              </div>

              {/* Información del Tráfico */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre el Tráfico Humano
                </h3>

                <div>
                  <Label className="mb-2 block">Tipo de tráfico humano sufrido *</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trabajoForzado" />
                      <Label htmlFor="trabajoForzado" className="font-normal">
                        Trabajo forzado
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="explotacionSexual" />
                      <Label htmlFor="explotacionSexual" className="font-normal">
                        Explotación sexual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="servicioDomestico" />
                      <Label htmlFor="servicioDomestico" className="font-normal">
                        Servicio doméstico forzado
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="matrimonioForzado" />
                      <Label htmlFor="matrimonioForzado" className="font-normal">
                        Matrimonio forzado
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="descripcionTrafico">
                    Descripción detallada del tráfico humano *
                  </Label>
                  <Textarea
                    id="descripcionTrafico"
                    required
                    rows={4}
                    placeholder="Describa las circunstancias del tráfico, cómo fue reclutado/a, las condiciones de trabajo..."
                  />
                </div>

                <div>
                  <Label htmlFor="lugarTrafico">Lugar donde ocurrió el tráfico *</Label>
                  <Input id="lugarTrafico" required placeholder="Ciudad, Estado, País" />
                </div>
              </div>

              {/* Cooperación */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre la Cooperación
                </h3>

                <div>
                  <Label>¿Ha cooperado con las autoridades en la investigación? *</Label>
                  <RadioGroup
                    required
                    onValueChange={(value) => setShowCoopDetails(value === 'si')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="cooperacionSi" />
                      <Label htmlFor="cooperacionSi" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="cooperacionNo" />
                      <Label htmlFor="cooperacionNo" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {showCoopDetails && (
                  <div>
                    <Label htmlFor="descripcionCooperacion">
                      Descripción de la cooperación
                    </Label>
                    <Textarea
                      id="descripcionCooperacion"
                      rows={3}
                      placeholder="Describa cómo ha cooperado con las autoridades"
                    />
                  </div>
                )}

                <div>
                  <Label>¿Tiene miedo de represalias si regresa a su país? *</Label>
                  <RadioGroup
                    required
                    onValueChange={(value) => setShowFearDetails(value === 'si')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="miedoSi" />
                      <Label htmlFor="miedoSi" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="miedoNo" />
                      <Label htmlFor="miedoNo" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {showFearDetails && (
                  <div>
                    <Label htmlFor="descripcionMiedo">
                      Descripción del miedo a represalias
                    </Label>
                    <Textarea
                      id="descripcionMiedo"
                      rows={3}
                      placeholder="Explique por qué teme regresar a su país de origen"
                    />
                  </div>
                )}
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Documentos Requeridos:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Formulario I-914 completado</li>
                  <li>Evidencia del tráfico humano</li>
                  <li>Evidencia de cooperación con las autoridades</li>
                  <li>Declaraciones juradas de testigos</li>
                  <li>Documentos de identidad del solicitante</li>
                </ol>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Formulario
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
