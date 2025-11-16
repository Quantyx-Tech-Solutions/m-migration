'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

export function VideoTransitionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section ref={sectionRef} className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="relative w-full max-w-7xl mx-4 rounded-3xl overflow-hidden"
          style={{
            transform: `scale(${0.8 + scrollProgress * 0.2})`,
            opacity: Math.max(0.3, 1 - scrollProgress * 0.5),
          }}
        >
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/professional-immigration-office-consultation.jpg"
            >
              <source src="/immigration-success-story-video.jpg" type="video/mp4" />
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center group cursor-pointer" onClick={handlePlayVideo}>
                <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-10 h-10 text-black ml-2" />
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tu Historia Empieza Aquí
            </h3>
            <p className="text-xl text-white/80">
              Mira cómo transformamos vidas cada día
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
