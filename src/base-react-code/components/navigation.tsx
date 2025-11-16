'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#historias', label: 'Historias' },
    { href: '#formularios', label: 'Formularios' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-UoBzkRHwDDOO1IgCMKx8LtI76y7Q6i.svg"
              alt="M-Migration LLC"
              width={50}
              height={50}
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold text-white">
              M-MIGRATION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#87b8c6] transition-all group-hover:w-full" />
              </a>
            ))}
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-[#87b8c6] to-[#2e707b] hover:opacity-90 rounded-full"
            >
              Consulta Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-[#87b8c6] to-[#2e707b] rounded-full">
              Consulta Gratis
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
