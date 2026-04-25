"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Descubrimiento",
    description: "Analizamos tu negocio, objetivos y audiencia para crear una estrategia personalizada.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description: "Creamos wireframes y prototipos interactivos que visualizan tu proyecto antes de desarrollarlo.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con código limpio, optimizado y las mejores prácticas del mercado.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lanzamiento",
    description: "Desplegamos tu proyecto y te acompañamos en el crecimiento con soporte continuo.",
  },
]

export function Workflow() {
  return (
    <section id="proceso" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 blur-[128px] rounded-full" />

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
            Nuestro
            <span className="block mt-2 text-primary">proceso</span>
          </h2>
          <p className="mt-6 text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Un flujo de trabajo refinado que garantiza resultados excepcionales 
            en cada proyecto que emprendemos.
          </p>
        </motion.div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection line between cards - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/40 to-primary/10" />
              )}

              <div className="relative h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-[#009ded22] hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Number badge */}
                  <span className="absolute -top-2 -right-2 text-5xl font-bold text-primary/10">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
