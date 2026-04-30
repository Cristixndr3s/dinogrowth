"use client"

import { notFound, useParams } from "next/navigation"
import { servicesData } from "@/lib/services"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  HelpCircle,
  Globe,
  ShoppingCart,
  TrendingUp,
  Shield,
  Smartphone
} from "lucide-react"

// --- Visual Components with animations ---

const WebVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[320px] aspect-[4/3] bg-background rounded-xl border border-white/10 shadow-2xl overflow-hidden relative group animate-float"
    >
      <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <div className="p-4 space-y-3 relative overflow-hidden h-full">
        {/* Scan line effect */}
        <div className="absolute left-0 w-full h-[2px] bg-primary/20 animate-scan z-20" />
        
        <div className="h-4 w-2/3 bg-primary/20 rounded-full" />
        <div className="h-24 w-full bg-white/5 rounded-lg flex items-center justify-center">
          <Globe className="w-8 h-8 text-primary/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 bg-white/5 rounded-md" />
          <div className="h-10 bg-white/5 rounded-md" />
          <div className="h-10 bg-white/5 rounded-md" />
        </div>
      </div>
    </motion.div>
  </div>
)

const SoftwareVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[320px] bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[10px] leading-tight"
    >
      <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 justify-between">
        <span className="text-white/40">api-handler.ts</span>
      </div>
      <div className="p-4 space-y-1">
        <p className="text-purple-400">export <span className="text-blue-400">async function</span> <span className="text-yellow-400">processData</span>() {"{"}</p>
        <p className="pl-4 text-white/70">  <span className="text-purple-400">const</span> result = <span className="text-blue-400">await</span> db.query();</p>
        <p className="pl-4 text-white/70">  <span className="text-blue-400">return</span> result.map(r ={">"} ({"{"}</p>
        <p className="pl-8 text-white/70">    ...r, status: <span className="text-green-400">'optimized'</span></p>
        <p className="pl-4 text-white/70">  {"}"}));<span className="inline-block w-1.5 h-3 bg-primary/50 ml-1 animate-pulse" /></p>
        <p className="text-white/70">{"}"}</p>
      </div>
      <div className="mt-4 bg-green-500/10 border-t border-green-500/20 p-2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-green-400 font-bold uppercase tracking-widest text-[8px]">Agente IA Activo</span>
      </div>
    </motion.div>
  </div>
)

const EcommerceVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <div className="w-[220px] bg-background rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-4 space-y-4 relative">
      <div className="aspect-square rounded-2xl bg-white/5 flex items-center justify-center relative overflow-hidden group">
        <ShoppingCart className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-1/2 bg-white/20 rounded-full" />
        <div className="h-4 w-3/4 bg-white rounded-full" />
        <div className="flex justify-between items-center pt-2">
          <span className="text-primary font-bold">$149.000</span>
          <div className="px-3 py-1 bg-primary rounded-full text-[10px] font-bold text-white animate-pulse">Comprar</div>
        </div>
      </div>
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute -top-2 -right-6 p-3 bg-white text-black rounded-2xl shadow-xl flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4 text-white" />
        </div>
        <div className="text-[10px] leading-tight">
          <p className="font-bold">Nueva Venta</p>
          <p className="opacity-60">Medellín, COL</p>
        </div>
      </motion.div>
    </div>
  </div>
)

const MVPVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="w-[180px] h-[340px] bg-black rounded-[3rem] border-[6px] border-white/10 shadow-2xl overflow-hidden p-3 relative z-10">
        <div className="w-12 h-1 bg-white/20 mx-auto rounded-full mb-4" />
        <div className="space-y-3">
          <div className="h-8 w-full bg-white/5 rounded-lg" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 bg-primary/20 rounded-lg animate-pulse" />
            <div className="h-16 bg-white/5 rounded-lg" />
          </div>
          <div className="h-24 w-full bg-white/5 rounded-lg" />
          <div className="h-10 w-full bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold text-white">Lanzar MVP</div>
        </div>
      </div>
      <div className="absolute -right-8 bottom-20 p-3 bg-card border border-white/10 rounded-xl shadow-xl z-20 animate-bounce">
         <Smartphone className="w-6 h-6 text-primary" />
      </div>
    </motion.div>
  </div>
)

const WebmasterVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <div className="w-full max-w-[260px] aspect-square bg-card rounded-full border border-white/5 p-8 relative flex items-center justify-center">
      <div className="absolute inset-2 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield className="w-16 h-16 text-primary mb-4" />
        </motion.div>
        <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest font-bold">Safe & Online</span>
        <div className="mt-4 px-4 py-1.5 bg-green-500/10 rounded-full border border-green-500/20 text-[10px] text-green-400">
          Uptime: 99.9%
        </div>
      </div>
    </div>
  </div>
)

const SEOVisual = () => (
  <div className="relative w-full h-full p-4 flex items-center justify-center">
    <div className="w-full max-w-[300px] bg-card rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-xs text-white/40 mb-1">Tráfico Orgánico</p>
          <p className="text-2xl font-bold text-white">+420%</p>
        </div>
        <TrendingUp className="w-10 h-10 text-primary animate-bounce" />
      </div>
      <div className="flex items-end gap-1.5 h-24">
        {[40, 30, 45, 60, 55, 80, 70, 90, 100].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-primary/20 rounded-t-sm animate-bar"
            style={{ 
              height: `${h}%`, 
              backgroundColor: i === 8 ? 'var(--color-primary)' : '',
              animationDelay: `${i * 0.1}s` 
            }}
          />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
        <div className="h-2 w-12 bg-white/10 rounded-full" />
        <div className="h-2 w-12 bg-white/10 rounded-full" />
        <div className="h-2 w-12 bg-white/10 rounded-full" />
      </div>
    </div>
  </div>
)

const ServiceVisual = ({ slug }: { slug: string }) => {
  switch (slug) {
    case "sitios-web": return <WebVisual />
    case "software-a-la-medida": return <SoftwareVisual />
    case "ecommerce": return <EcommerceVisual />
    case "mvp": return <MVPVisual />
    case "webmaster": return <WebmasterVisual />
    case "seo": return <SEOVisual />
    default: return <div className="flex items-center justify-center h-full text-white/20"><Globe className="w-32 h-32" /></div>
  }
}

// --- Main Page Component ---

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return {}
  return {
    title: service.title,
    description: service.subtitle,
    openGraph: {
      title: service.title,
      description: service.subtitle,
      url: `https://dinogrowth.com/servicios/${slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.subtitle,
    },
  }
}

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/80">Servicio Especializado</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8"
            >
              {service.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 text-pretty"
            >
              {service.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contacto"
                className="group px-8 py-4 bg-primary text-white font-medium rounded-full flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(0,157,237,0.4)]"
              >
                Cotizar proyecto
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#proceso"
                className="px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all"
              >
                Ver metodología
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Tu negocio se siente estancado por estas razones?
            </h2>
            <p className="text-white/60">
              Identificamos los puntos de dolor más comunes que frenan el crecimiento digital en Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.problems.map((problem, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <span className="text-destructive font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-white/60 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="metodologia" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
              >
                {service.solution.title}
              </motion.h2>
              <p className="text-lg text-white/70 mb-8">
                {service.solution.description}
              </p>
              
              <ul className="space-y-4">
                {service.solution.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="italic text-white/80">
                  "Nuestro enfoque no es solo programar; es entender tu mercado y aplicar IA para que cada línea de código trabaje para tus ventas."
                </p>
                <p className="mt-4 font-bold text-primary">— Equipo Dinogrowth</p>
              </div>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-card group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-0" />
              <div className="relative z-10 w-full h-full">
                <ServiceVisual slug={service.slug} />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 z-20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-white tracking-wide">Sistema Optimizado</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 px-4 py-2 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 z-20">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">IA Powered Agent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Beneficios de Impacto Real</h2>
            <p className="text-white/60 text-lg">Invertir en tecnología de punta tiene un retorno directo en la eficiencia de tu negocio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => {
              const BenIcon = benefit.icon
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/40 transition-all">
                    <BenIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Nuestro Proceso Ágil</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/30 border border-white/5"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-20 md:py-32 container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Agenda una sesión de descubrimiento y descubre cómo podemos transformar tu negocio con tecnología de clase mundial.
            </p>
            <a
              href="https://wa.me/573116710009?text=Hola%2C%20quiero%20hablar%20con%20un%20experto%20de%20dinogrowth."
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all shadow-xl"
            >
              <MessageSquare className="w-6 h-6" />
              Hablar con un experto por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
