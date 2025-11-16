'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    {
      category: 'eventos',
      title: 'Seminario de Inmigración 2024',
      image: '/immigration-seminar-professional-event.jpg',
      description: 'Evento educativo sobre procesos migratorios',
    },
    {
      category: 'equipo',
      title: 'Nuestro Equipo Legal',
      image: '/professional-legal-team-office.jpg',
      description: 'Expertos dedicados a tu caso',
    },
    {
      category: 'celebraciones',
      title: 'Casos Aprobados',
      image: '/happy-family-celebrating-success.jpg',
      description: 'Celebrando el éxito de nuestros clientes',
    },
    {
      category: 'eventos',
      title: 'Consulta Comunitaria',
      image: '/community-consultation-meeting.jpg',
      description: 'Asesoría gratuita para la comunidad',
    },
    {
      category: 'celebraciones',
      title: 'Ceremonia de Ciudadanía',
      image: '/citizenship-ceremony-american-flag.jpg',
      description: 'Acompañando a nuevos ciudadanos',
    },
    {
      category: 'equipo',
      title: 'Oficinas M-Migration',
      image: '/modern-professional-office-interior.jpg',
      description: 'Espacio acogedor para nuestros clientes',
    },
  ]

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'equipo', label: 'Equipo' },
    { id: 'celebraciones', label: 'Celebraciones' },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestra Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
            Conoce más sobre nuestra empresa, eventos y momentos especiales
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Badge
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-2 text-sm hover:bg-primary hover:text-white transition-colors"
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
