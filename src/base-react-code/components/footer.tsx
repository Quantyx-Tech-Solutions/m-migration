'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3f4c]/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-UoBzkRHwDDOO1IgCMKx8LtI76y7Q6i.svg"
                alt="M-Migration LLC"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold text-white">
                M-MIGRATION LLC
              </span>
            </div>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Tu socio de confianza en el camino hacia el sueño americano.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#87b8c6] to-[#2e707b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#87b8c6] to-[#2e707b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#87b8c6] to-[#2e707b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#87b8c6] to-[#2e707b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Visas de Trabajo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Reunificación Familiar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  VAWA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Visa U y T
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Green Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Compañía
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="#about" className="hover:text-[#87b8c6] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#87b8c6] flex-shrink-0 mt-0.5" />
                <span>123 Immigration Ave, Suite 100, Miami, FL 33101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#87b8c6] flex-shrink-0" />
                <span>(305) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#87b8c6] flex-shrink-0" />
                <span>info@m-migration.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} M-Migration LLC. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-[#87b8c6] transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
