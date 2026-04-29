"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import FloatingLines from "@/components/floating-lines"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#004d7a", "#003360", "#001f40", "#000d1a"]}
          enabledWaves={["bottom", "middle", "top"]}
          lineCount={[4, 6, 3]}
          lineDistance={[8, 5, 10]}
          animationSpeed={0.6}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/80">Agencia Digital Potenciada por IA en Colombia</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight"
          >
            Tu sitio web profesional
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              listo en 5 días
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-lg md:text-[1.2rem] text-white/80 leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            Diseñamos y desarrollamos sitios de clase mundial con el poder de la IA. 
            Más rápido que una agencia tradicional, más profesional que un freelancer. Desde $600k.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/573116710009?text=Hola%2C%20vi%20tu%20sitio%20y%20quiero%20lanzar%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,157,237,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lanzar mi proyecto ya
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/blog"
              className="px-8 py-4 rounded-full border border-primary/30 text-white font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              Ver blog y casos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: "5 Días", label: "Tiempo de Entrega" },
              { value: "100%", label: "Optimización SEO" },
              { value: "$600k", label: "Precios desde" },
              { value: "IA Powered", label: "Tecnología de Punta" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
