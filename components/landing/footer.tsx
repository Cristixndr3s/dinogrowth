"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-[#009ded22]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-primary">Nexus</span>Digital
            </a>
            <p className="mt-2 text-sm text-white/50">
              {currentYear} Nexus Digital. Todos los derechos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-[#009ded22] flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Términos de servicio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
