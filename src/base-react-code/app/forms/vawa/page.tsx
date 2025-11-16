'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function VAWAFormPage() {
  const [showChildInfo, setShowChildInfo] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario VAWA enviado exitosamente. Nos contactaremos contigo pronto.')
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
          <CardHeader className="bg-rose-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="w-8 h-8" />
              <CardTitle className="text-2xl">Formulario VAWA</CardTitle>
            </div>
            <CardDescription className="text-white/90">
              Solicitud de visa para víctimas de abuso
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

              {/* Información del Abusador */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre el Abusador
                </h3>

                <div>
                  <Label htmlFor="nombreAbusador">Nombre completo del abusador *</Label>
                  <Input id="nombreAbusador" required placeholder="Nombre del abusador" />
                </div>

                <div>
                  <Label htmlFor="relacionAbusador">Relación con el abusador *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="esposo">Esposo/Esposa</SelectItem>
                      <SelectItem value="padre">Padre</SelectItem>
                      <SelectItem value="madre">Madre</SelectItem>
                      <SelectItem value="hijo">Hijo/Hija</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="estatusMigratorioAbusador">
                    Estatus migratorio del abusador *
                  </Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ciudadano">Ciudadano estadounidense</SelectItem>
                      <SelectItem value="residente">Residente permanente</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Información del Abuso */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información sobre el Abuso
                </h3>

                <div>
                  <Label className="mb-2 block">Tipo de abuso sufrido *</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="abusoFisico" />
                      <Label htmlFor="abusoFisico" className="font-normal">
                        Abuso físico
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="abusoEmocional" />
                      <Label htmlFor="abusoEmocional" className="font-normal">
                        Abuso emocional/psicológico
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="abusoSexual" />
                      <Label htmlFor="abusoSexual" className="font-normal">
                        Abuso sexual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="abusoEconomico" />
                      <Label htmlFor="abusoEconomico" className="font-normal">
                        Abuso económico
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="descripcionAbuso">
                    Descripción detallada del abuso *
                  </Label>
                  <Textarea
                    id="descripcionAbuso"
                    required
                    rows={4}
                    placeholder="Describa los incidentes de abuso, fechas aproximadas, y cualquier detalle relevante"
                  />
                </div>
              </div>

              {/* Información Adicional */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground border-b pb-2">
                  Información Adicional
                </h3>

                <div>
                  <Label>¿Tiene hijos en común con el abusador?</Label>
                  <RadioGroup
                    onValueChange={(value) => setShowChildInfo(value === 'si')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="hijosSi" />
                      <Label htmlFor="hijosSi" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="hijosNo" />
                      <Label htmlFor="hijosNo" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {showChildInfo && (
                  <div>
                    <Label htmlFor="numeroHijos">Número de hijos en común</Label>
                    <Input id="numeroHijos" type="number" min="1" />
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

              <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Documentos Requeridos:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Formulario I-360 completado</li>
                  <li>Evidencia del abuso (reportes policiales, órdenes de protección, etc.)</li>
                  <li>Evidencia de la relación con el abusador</li>
                  <li>Evidencia del estatus migratorio del abusador</li>
                  <li>Declaraciones juradas de testigos</li>
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
