'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'

export default function VisaCUFormPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario Visa C/U enviado exitosamente. Nos contactaremos contigo pronto.')
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
          <CardHeader className="bg-teal-600 text-white rounded-t-xl">
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="w-8 h-8" />
              <CardTitle className="text-2xl">Formulario Visa C/U</CardTitle>
            </div>
            <CardDescription className="text-white/90">
              Intake for admission annex Visa for victims
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nombreCompleto">Nombre Legal Completo *</Label>
                <Input id="nombreCompleto" required placeholder="Nombre Legal Completo" />
              </div>

              <div>
                <Label htmlFor="aNumber">
                  Número de registro de extranjero (A-Number) (si tienes)
                </Label>
                <Input id="aNumber" placeholder="A-Number" />
              </div>

              <div>
                <Label htmlFor="estadoCivil">¿Cuál es tu estado civil actual? *</Label>
                <Input id="estadoCivil" required placeholder="Estado civil" />
              </div>

              <div>
                <Label htmlFor="vecesCasado">
                  ¿Cuántas veces te has casado? *
                </Label>
                <Input id="vecesCasado" required placeholder="Número de veces" />
              </div>

              <div>
                <Label htmlFor="nombreConyuge">Nombre completo del cónyuge actual</Label>
                <Input id="nombreConyuge" placeholder="Nombre del cónyuge" />
              </div>

              <div>
                <Label htmlFor="fechaLugarMatrimonio">
                  Fecha y lugar del matrimonio
                </Label>
                <Input id="fechaLugarMatrimonio" placeholder="Fecha y lugar" />
              </div>

              <div>
                <Label htmlFor="causalesInadmisibilidad">
                  ¿Qué causales de inadmisibilidad aplican a tu caso? *
                </Label>
                <Input id="causalesInadmisibilidad" required placeholder="Causales" />
              </div>

              <div>
                <Label htmlFor="permisoEntrada">
                  ¿Has solicitado previamente permiso para entrar a EE.UU.? *
                </Label>
                <Input id="permisoEntrada" required placeholder="Sí/No - Detalles" />
              </div>

              <div>
                <Label htmlFor="seisMeses">
                  ¿Has estado en EE.UU. por seis meses o más? *
                </Label>
                <Input id="seisMeses" required placeholder="Sí/No - Cuándo y bajo qué estatus" />
              </div>

              <div>
                <Label htmlFor="ocupacion">
                  ¿Cuál es tu ocupación actual o más reciente? *
                </Label>
                <Input id="ocupacion" required placeholder="Ocupación" />
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Nota Importante:
                </h3>
                <p className="text-sm text-muted-foreground">
                  Este formulario es parte del proceso de admisión anexo a Visa para víctimas.
                  Toda la información proporcionada será tratada con estricta confidencialidad.
                </p>
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
