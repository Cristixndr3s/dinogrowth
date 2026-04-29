"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  { label: "Sitios Web", href: "/servicios/sitios-web" },
  { label: "Software a la Medida", href: "/servicios/software-a-la-medida" },
  { label: "E-commerce", href: "/servicios/ecommerce" },
  { label: "MVP", href: "/servicios/mvp" },
  { label: "Webmaster", href: "/servicios/webmaster" },
  { label: "SEO", href: "/servicios/seo" },
]

const WA_URL = "https://wa.me/573116710009?text=Hola%2C%20quiero%20cotizar%20un%20proyecto."

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "py-4 bg-background/95 backdrop-blur-lg border-b border-[#009ded22]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-white z-50 relative">
              <span className="text-primary">dino</span>growth
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors duration-300"
                >
                  Servicios
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl border border-[#009ded22] bg-background/95 backdrop-blur-lg shadow-xl overflow-hidden"
                    >
                      <div className="py-2">
                        <Link
                          href="/#servicios"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-5 py-2.5 text-xs font-semibold text-primary/70 uppercase tracking-wider hover:bg-primary/5"
                        >
                          Ver todos
                        </Link>
                        <div className="my-1 border-t border-white/5" />
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-primary/10 transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href="/#proceso" className="text-sm text-white/70 hover:text-primary transition-colors duration-300">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm text-white/70 hover:text-primary transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>

            {/* CTA desktop */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-6 py-2.5 rounded-full border border-primary/30 text-sm text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Cotizar proyecto
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu — overlay pantalla completa */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col md:hidden"
          >
            {/* Contenido centrado verticalmente */}
            <div className="flex flex-col justify-center flex-1 px-8 pt-20 pb-10 gap-2">

              {/* Servicios expandible */}
              <div className="border-b border-white/5 py-4">
                <button
                  onClick={() => setIsMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-2xl font-semibold text-white"
                >
                  Servicios
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 grid grid-cols-2 gap-2">
                        {services.map((s, i) => (
                          <motion.div
                            key={s.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              href={s.href}
                              onClick={closeMenu}
                              className="block px-4 py-3 rounded-xl bg-white/5 text-sm text-white/70 hover:bg-primary/10 hover:text-white transition-colors"
                            >
                              {s.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: "Proceso", href: "/#proceso" },
                { label: "Blog", href: "/blog" },
                { label: "Contacto", href: "/#contacto" },
              ].map((item) => (
                <div key={item.href} className="border-b border-white/5 py-4">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-2xl font-semibold text-white hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* CTA principal */}
              <div className="mt-6">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary rounded-2xl text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Cotizar proyecto
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
