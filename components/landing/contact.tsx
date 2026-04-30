"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [focused, setFocused] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.9] text-balance">
            Hablemos de
            <span className="block mt-2 text-primary">tu proyecto</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para escuchar tus ideas y convertirlas en realidad. 
            Contáctanos y comencemos a crear algo extraordinario juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Información de contacto</h3>
              <p className="text-white/70 leading-relaxed">
                Nuestro equipo está disponible para responder todas tus preguntas 
                y guiarte en el proceso de transformación digital de tu negocio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-white">hablemos@dinogrowth.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Teléfono</p>
                  <p className="text-white">+57 311 671 0009</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Ubicación</p>
                  <p className="text-white">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 py-4 bg-card/50 border border-[#009ded22] rounded-xl text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Nombre completo"
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === "name" || formData.name
                      ? "-top-2.5 text-xs bg-background px-2 text-primary"
                      : "top-4 text-white/50"
                  }`}
                >
                  Nombre completo
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 py-4 bg-card/50 border border-[#009ded22] rounded-xl text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Correo electrónico"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === "email" || formData.email
                      ? "-top-2.5 text-xs bg-background px-2 text-primary"
                      : "top-4 text-white/50"
                  }`}
                >
                  Correo electrónico
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 py-4 bg-card/50 border border-[#009ded22] rounded-xl text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Teléfono"
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === "phone" || formData.phone
                      ? "-top-2.5 text-xs bg-background px-2 text-primary"
                      : "top-4 text-white/50"
                  }`}
                >
                  Teléfono (opcional)
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 py-4 bg-card/50 border border-[#009ded22] rounded-xl text-white placeholder-transparent focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto"
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === "message" || formData.message
                      ? "-top-2.5 text-xs bg-background px-2 text-primary"
                      : "top-4 text-white/50"
                  }`}
                >
                  Cuéntanos sobre tu proyecto
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,157,237,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </motion.button>

              {status === "success" && (
                <p className="text-center text-green-400 text-sm">
                  ¡Mensaje enviado! Te respondemos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 text-sm">
                  Hubo un error. Escríbenos directo a hablemos@dinogrowth.com
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
