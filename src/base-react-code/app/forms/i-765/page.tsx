'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'

export default function I765FormPage() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    numeroA: '',
    direccionActual: '',
    codPostal: '',
    numeroTelefono: '',
    nombrePadre: '',
    nombreMadre: '',
    antecedentes: false,
    txtPenales: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Formulario enviado exitosamente. Nos contactaremos contigo pronto.')
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
              <FileText className="w-8 h-8" />
              <CardTitle className="text-2xl">Formulario I-765</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/90">
              Solicitud de Autorización de Empleo
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nombreCompleto">
                    Nombre completo del solicitante *
                  </Label>
                  <Input
                    id="nombreCompleto"
                    required
                    placeholder="Nombre Completo"
                    value={formData.nombreCompleto}
                    onChange={(e) =>
                      setFormData({ ...formData, nombreCompleto: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="numeroA">Número A</Label>
                  <Input
                    id="numeroA"
                    placeholder="Número A"
                    value={formData.numeroA}
                    onChange={(e) =>
                      setFormData({ ...formData, numeroA: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="direccionActual">Dirección actual *</Label>
                  <Input
                    id="direccionActual"
                    required
                    placeholder="Dirección actual"
                    value={formData.direccionActual}
                    onChange={(e) =>
                      setFormData({ ...formData, direccionActual: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="codPostal">Código Postal *</Label>
                    <Input
                      id="codPostal"
                      type="number"
                      required
                      placeholder="Código Postal"
                      value={formData.codPostal}
                      onChange={(e) =>
                        setFormData({ ...formData, codPostal: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="numeroTelefono">Número Teléfono *</Label>
                    <Input
                      id="numeroTelefono"
                      type="tel"
                      required
                      placeholder="Número Teléfono"
                      value={formData.numeroTelefono}
                      onChange={(e) =>
                        setFormData({ ...formData, numeroTelefono: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombrePadre">Nombre Padre *</Label>
                    <Input
                      id="nombrePadre"
                      required
                      placeholder="Nombre Padre"
                      value={formData.nombrePadre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombrePadre: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="nombreMadre">Nombre Madre *</Label>
                    <Input
                      id="nombreMadre"
                      required
                      placeholder="Nombre Madre"
                      value={formData.nombreMadre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombreMadre: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                  <Checkbox
                    id="antecedentes"
                    checked={formData.antecedentes}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, antecedentes: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="antecedentes"
                    className="text-sm font-normal cursor-pointer"
                  >
                    ¿Tiene antecedentes penales?
                  </Label>
                </div>

                {formData.antecedentes && (
                  <div>
                    <Label htmlFor="txtPenales">Explique brevemente:</Label>
                    <Textarea
                      id="txtPenales"
                      rows={3}
                      placeholder="Describa sus antecedentes penales..."
                      value={formData.txtPenales}
                      onChange={(e) =>
                        setFormData({ ...formData, txtPenales: e.target.value })
                      }
                    />
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Documentos Requeridos:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>ID válido con foto (pasaporte, licencia, ID consular, etc.)</li>
                  <li>
                    Copia de documentos migratorios (I-94, carta de asilo, notificación
                    de USCIS, etc.)
                  </li>
                  <li>Una foto digital tipo pasaporte con las especificaciones requeridas</li>
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
