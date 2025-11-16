'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, FileCheck, Shield, Award } from 'lucide-react'

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            number={500}
            label="Familias Reunidas"
            suffix="+"
          />
          <StatCard
            icon={<FileCheck className="w-8 h-8" />}
            number={98}
            label="Tasa de Éxito"
            suffix="%"
          />
          <StatCard
            icon={<Shield className="w-8 h-8" />}
            number={15}
            label="Años Protegiendo Derechos"
            suffix="+"
          />
          <StatCard
            icon={<Award className="w-8 h-8" />}
            number={50}
            label="Profesionales Certificados"
            suffix="+"
          />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  number,
  label,
  suffix = '',
}: {
  icon: React.ReactNode
  number: number
  label: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div
      ref={ref}
      className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
