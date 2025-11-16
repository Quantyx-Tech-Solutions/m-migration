'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, X } from 'lucide-react'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Conoce Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Mira cómo trabajamos para hacer realidad tu sueño americano
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative group">
                <img
                  src="/professional-immigration-office-consultation.jpg"
                  alt="Video Preview"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="group h-20 w-20 rounded-full bg-white text-primary hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Tu Camino hacia Estados Unidos
                  </h3>
                  <p className="text-white/90">
                    Un recorrido por nuestros servicios y casos de éxito
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-black">
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  src="/immigration-services-video.jpg"
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
