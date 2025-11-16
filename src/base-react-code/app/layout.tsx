import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M-Migration LLC - Tu Camino Hacia el Sueño Americano',
  description: 'Servicios profesionales de inmigración. Visas de trabajo, reunificación familiar, VAWA, Visa U y T. Más de 15 años ayudando familias a cumplir su sueño americano.',
  keywords: 'inmigración, visa, estados unidos, VAWA, visa U, visa T, green card, ciudadanía',
  authors: [{ name: 'M-Migration LLC' }],
  openGraph: {
    title: 'M-Migration LLC - Servicios de Inmigración',
    description: 'Tu socio de confianza en el camino hacia el sueño americano',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2e707b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
