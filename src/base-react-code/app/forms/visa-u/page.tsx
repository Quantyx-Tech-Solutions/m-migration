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

export default function VisaUFormPage() {
  const [showReportDetails, setShowReportDetails] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario Visa U enviado exitosamente. Nos contactaremos contigo pronto.')
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
          <CardHeader className="bg-indigo-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="w-8 h-8" />
              <CardTitle className="text-2xl">Formulario Visa U</CardTitle>
            </div>
            <CardDescription className="text-white/90">
              Solicitud de visa para víctimas de crímenes
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

              {/* Información del Crimen */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre el Crimen
                </h3>

                <div>
                  <Label className="mb-2 block">Tipo de crimen sufrido *</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="violenciaDomestica" />
                      <Label htmlFor="violenciaDomestica" className="font-normal">
                        Violencia doméstica
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agresionSexual" />
                      <Label htmlFor="agresionSexual" className="font-normal">
                        Agresión sexual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="secuestro" />
                      <Label htmlFor="secuestro" className="font-normal">
                        Secuestro
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="extorsion" />
                      <Label htmlFor="extorsion" className="font-normal">
                        Extorsión
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trataPersonas" />
                      <Label htmlFor="trataPersonas" className="font-normal">
                        Trata de personas
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="descripcionCrimen">
                    Descripción detallada del crimen *
                  </Label>
                  <Textarea
                    id="descripcionCrimen"
                    required
                    rows={4}
                    placeholder="Describa el crimen, cuándo ocurrió, dónde, quién lo cometió..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fechaCrimen">Fecha del crimen *</Label>
                    <Input id="fechaCrimen" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="lugarCrimen">Lugar del crimen *</Label>
                    <Input id="lugarCrimen" required placeholder="Dirección específica" />
                  </div>
                </div>
              </div>

              {/* Cooperación */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre la Cooperación
                </h3>

                <div>
                  <Label>¿Reportó el crimen a la policía? *</Label>
                  <RadioGroup
                    required
                    onValueChange={(value) => setShowReportDetails(value === 'si')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="reporteSi" />
                      <Label htmlFor="reporteSi" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="reporteNo" />
                      <Label htmlFor="reporteNo" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {showReportDetails && (
                  <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <Label htmlFor="numeroCaso">Número de caso policial</Label>
                      <Input id="numeroCaso" placeholder="Número de caso" />
                    </div>
                    <div>
                      <Label htmlFor="fechaReporte">Fecha del reporte</Label>
                      <Input id="fechaReporte" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="departamento">Departamento de policía</Label>
                      <Input id="departamento" placeholder="Nombre del departamento" />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="observaciones">Observaciones adicionales</Label>
                  <Textarea
                    id="observaciones"
                    rows={3}
                    placeholder="Cualquier información adicional que considere relevante"
                  />
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Documentos Requeridos:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Formulario I-918 completado</li>
                  <li>Evidencia del crimen</li>
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
