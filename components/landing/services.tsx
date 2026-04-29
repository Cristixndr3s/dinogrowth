"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Palette, 
  Code2, 
  Rocket, 
  ShoppingCart, 
  ShieldCheck, 
  Search,
  Layout,
  ArrowRight
} from "lucide-react"

const services = [
  {
    slug: "sitios-web",
    icon: Layout,
    title: "Sitios Web de Alto Impacto",
    description: "Diseñamos portales corporativos que no solo se ven bien, sino que venden. Estructuras de clase mundial optimizadas con IA para maximizar la conversión y velocidad.",
  },
  {
    slug: "software-a-la-medida",
    icon: Code2,
    title: "Software a la Medida",
    description: "Automatizamos y escalamos tu operación con soluciones personalizadas. Arquitecturas modernas diseñadas para adaptarse al crecimiento específico de tu negocio.",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Escalable",
    description: "Domina el comercio electrónico en Colombia. Tiendas online de alto rendimiento con integración total de pasarelas de pago (Bold, Wompi) y logística.",
  },
  {
    slug: "mvp",
    icon: Rocket,
    title: "Desarrollo de MVP",
    description: "Acelera tu llegada al mercado. Desarrollamos productos mínimos viables potenciados por IA para validar tu modelo de negocio en tiempo récord y con menor inversión.",
  },
  {
    slug: "webmaster",
    icon: ShieldCheck,
    title: "Webmaster Proactivo",
    description: "Mantenimiento especializado para que tu sitio nunca se detenga. Seguridad blindada, actualizaciones constantes y soporte técnico dedicado para tu tranquilidad.",
  },
  {
    slug: "seo",
    icon: Search,
    title: "Posicionamiento SEO",
    description: "Aparece donde están las búsquedas de tus clientes. Estrategias de SEO técnico y de contenido para dominar tu nicho y reducir tu dependencia de la publicidad pagada.",
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
            Soluciones digitales
            <span className="block mt-2 text-primary">que facturan</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Potenciamos tu negocio con tecnología IA para que obtengas resultados 
            profesionales en tiempo récord y al mejor precio del mercado.
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
            <Link key={index} href={`/servicios/${service.slug}`}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-[#009ded22] hover:border-primary/40 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                  </h3>
                  
                  <p className="text-sm text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
