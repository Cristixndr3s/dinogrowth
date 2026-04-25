"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  BarChart3, 
  Megaphone 
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y visualmente impactantes que cautivan a tus usuarios desde el primer momento.",
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Sitios web rápidos, seguros y escalables construidos con las últimas tecnologías del mercado.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma que conectan con tu audiencia donde sea que estén.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online optimizadas para conversión con pasarelas de pago colombianas integradas.",
  },
  {
    icon: BarChart3,
    title: "Analítica Digital",
    description: "Métricas y dashboards que te permiten tomar decisiones basadas en datos reales.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de posicionamiento y publicidad que maximizan tu retorno de inversión.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.9] text-balance">
            Servicios que
            <span className="block mt-2 text-primary">transforman</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales integrales diseñadas para impulsar el crecimiento 
            de tu empresa en el mercado colombiano.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-[#009ded22] hover:border-primary/40 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
