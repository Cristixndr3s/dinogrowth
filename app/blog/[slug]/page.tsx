"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Share2, Twitter, User } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

const blogPosts: Record<string, {
  title: string
  excerpt: string
  author: string
  authorRole: string
  date: string
  readTime: string
  category: string
  content: string[]
}> = {
  "tendencias-diseno-web-2024": {
    title: "Tendencias de Diseño Web que Dominarán el 2024",
    excerpt: "Exploramos las últimas tendencias en diseño web: desde el minimalismo radical hasta las experiencias inmersivas con scroll animations.",
    author: "María González",
    authorRole: "Directora Creativa",
    date: "15 Enero 2024",
    readTime: "5 min",
    category: "Diseño",
    content: [
      "El mundo del diseño web está en constante evolución, y 2024 promete traer cambios significativos en la forma en que concebimos y creamos experiencias digitales. En este artículo, exploraremos las tendencias más importantes que están definiendo el panorama del diseño web este año.",
      "## Minimalismo Radical",
      "El minimalismo no es nuevo, pero en 2024 está tomando una forma más radical. Los diseñadores están eliminando todo lo innecesario, dejando solo los elementos esenciales que comunican el mensaje de la marca. Esto no significa sitios aburridos; por el contrario, cada elemento restante tiene un impacto visual mucho mayor.",
      "Las paletas de colores se están simplificando, con muchos sitios optando por esquemas monocromáticos o de dos colores que crean un impacto visual poderoso sin saturar al usuario.",
      "## Scroll Animations y Micro-interacciones",
      "Las animaciones basadas en scroll están transformando la narrativa digital. A medida que el usuario se desplaza, los elementos cobran vida de maneras sutiles pero significativas, guiando la atención y creando una experiencia más inmersiva.",
      "Las micro-interacciones, esos pequeños detalles animados que responden a las acciones del usuario, están volviéndose más sofisticadas. Un botón que cambia sutilmente al pasar el cursor, un formulario que celebra el envío exitoso con una animación, estos detalles marcan la diferencia.",
      "## Tipografía como Protagonista",
      "La tipografía está tomando el centro del escenario como nunca antes. Los diseñadores están utilizando fuentes grandes, audaces y expresivas como elemento principal de diseño, a veces reemplazando completamente las imágenes tradicionales.",
      "Las fuentes variables están permitiendo una mayor flexibilidad creativa, permitiendo ajustes sutiles en peso, ancho e inclinación que responden al contexto o las interacciones del usuario.",
      "## Dark Mode y Esquemas de Color Dinámicos",
      "El modo oscuro ya no es una opción, es una expectativa. Los usuarios esperan poder alternar entre modos claro y oscuro, y los diseñadores están creando experiencias que son igualmente hermosas en ambos modos.",
      "Más allá del simple dark mode, estamos viendo esquemas de color que se adaptan según la hora del día, las preferencias del sistema o incluso el contenido que se está visualizando.",
      "## Conclusión",
      "El diseño web en 2024 se trata de crear experiencias que sean a la vez simples y profundamente atractivas. Se trata de respetar el tiempo del usuario mientras se le ofrece algo memorable. Las marcas que adopten estas tendencias estarán mejor posicionadas para conectar con sus audiencias en un mundo digital cada vez más competitivo.",
    ],
  },
  "seo-local-colombia": {
    title: "SEO Local: Cómo Posicionar tu Negocio en Colombia",
    excerpt: "Guía completa para dominar las búsquedas locales y atraer más clientes a tu negocio en el mercado colombiano.",
    author: "Carlos Ramírez",
    authorRole: "Especialista SEO",
    date: "12 Enero 2024",
    readTime: "8 min",
    category: "Marketing",
    content: [
      "El SEO local es una de las estrategias más efectivas para negocios que atienden a clientes en ubicaciones geográficas específicas. En Colombia, donde la competencia digital está creciendo rápidamente, dominar el SEO local puede ser la diferencia entre el éxito y el anonimato digital.",
      "## ¿Por qué es Importante el SEO Local?",
      "Cuando un usuario busca 'restaurante cerca de mí' o 'abogado en Bogotá', Google muestra resultados locales. Si tu negocio no está optimizado para estas búsquedas, estás perdiendo clientes potenciales que están literalmente buscando lo que ofreces.",
      "Las estadísticas son claras: el 46% de todas las búsquedas en Google tienen intención local, y el 88% de los consumidores que realizan una búsqueda local en su smartphone visitan o llaman a una tienda en 24 horas.",
      "## Google Business Profile: Tu Mejor Aliado",
      "El primer paso para cualquier estrategia de SEO local es reclamar y optimizar tu perfil de Google Business. Este perfil gratuito es lo que aparece cuando alguien busca tu negocio o negocios similares en tu área.",
      "Asegúrate de completar toda la información: nombre del negocio, dirección, teléfono, horarios de atención, fotos de calidad, y responde a todas las reseñas, tanto positivas como negativas.",
      "## Palabras Clave Locales",
      "Incluye términos geográficos en tu estrategia de palabras clave. No solo 'servicios de diseño web', sino 'servicios de diseño web en Medellín' o 'agencia digital Cali'. Estas variaciones geográficas ayudan a Google a entender dónde operas.",
      "## Reseñas: El Factor Decisivo",
      "Las reseñas en Google no solo afectan tu ranking local, sino que también influyen directamente en la decisión de compra. Un negocio con muchas reseñas positivas genera más confianza y, por lo tanto, más conversiones.",
      "Implementa un sistema para solicitar reseñas a tus clientes satisfechos. Un simple email de seguimiento o una tarjeta con un código QR puede aumentar significativamente el número de reseñas que recibes.",
      "## Consistencia NAP",
      "NAP significa Nombre, Dirección y Teléfono. Es crucial que esta información sea exactamente la misma en todas partes: tu sitio web, Google Business Profile, directorios locales, redes sociales, etc. Las inconsistencias confunden a Google y pueden perjudicar tu ranking.",
      "## Conclusión",
      "El SEO local es una inversión que produce resultados medibles. Con una estrategia consistente y las tácticas correctas, puedes dominar las búsquedas locales en tu área y atraer un flujo constante de nuevos clientes.",
    ],
  },
  "ecommerce-colombia-guia": {
    title: "E-commerce en Colombia: Guía Completa para 2024",
    excerpt: "Todo lo que necesitas saber para lanzar y escalar tu tienda online en el mercado colombiano con éxito.",
    author: "Ana Martínez",
    authorRole: "Consultora E-commerce",
    date: "8 Enero 2024",
    readTime: "12 min",
    category: "Negocio",
    content: [
      "El comercio electrónico en Colombia ha experimentado un crecimiento exponencial en los últimos años. Si estás pensando en lanzar tu tienda online o escalar la existente, esta guía te proporcionará todo lo que necesitas saber para tener éxito en el mercado colombiano.",
      "## El Estado del E-commerce en Colombia",
      "Colombia es uno de los mercados de e-commerce más dinámicos de Latinoamérica. Con más de 30 millones de usuarios de internet y una penetración creciente de smartphones, las oportunidades son enormes.",
      "Sin embargo, también hay desafíos únicos: la logística en un país geográficamente diverso, la preferencia por pagos en efectivo en algunos segmentos, y una cultura de compra que todavía prefiere ver y tocar los productos.",
      "## Plataformas de E-commerce",
      "La elección de la plataforma correcta es crucial. Para negocios pequeños y medianos, opciones como Shopify o WooCommerce ofrecen un excelente equilibrio entre funcionalidad y facilidad de uso. Para operaciones más grandes, Magento o soluciones personalizadas pueden ser más apropiadas.",
      "## Pasarelas de Pago Colombianas",
      "En Colombia, debes ofrecer múltiples opciones de pago. Las principales pasarelas incluyen PayU, Mercado Pago, y las integraciones directas con PSE para transferencias bancarias. No olvides opciones de pago contra entrega para capturar a los clientes más cautelosos.",
      "## Logística y Envíos",
      "La logística es donde muchas tiendas online colombianas fallan o triunfan. Trabaja con múltiples transportadoras para cubrir todo el territorio nacional. Servientrega, Coordinadora, Envia, e Inter Rapidísimo son algunas de las opciones principales.",
      "Ofrece tiempos de entrega realistas y mantén a tus clientes informados sobre el estado de sus pedidos. La comunicación proactiva reduce las consultas de servicio al cliente y aumenta la satisfacción.",
      "## Marketing para E-commerce",
      "El marketing digital es esencial. Invierte en SEO para capturar tráfico orgánico, utiliza Google Ads y Facebook/Instagram Ads para llegar a nuevos clientes, y no subestimes el poder del email marketing para retener y reactivar clientes.",
      "Las redes sociales, especialmente Instagram y Facebook, son canales de venta directa en Colombia. Configura Instagram Shopping y Facebook Marketplace para expandir tu alcance.",
      "## Servicio al Cliente",
      "El servicio al cliente puede diferenciarte de la competencia. Ofrece múltiples canales de contacto: WhatsApp, chat en vivo, email, y teléfono. Responde rápidamente y resuelve problemas de manera proactiva.",
      "## Conclusión",
      "El e-commerce en Colombia tiene un futuro brillante. Con la preparación correcta, las herramientas adecuadas, y un enfoque obsesivo en el cliente, puedes construir un negocio online exitoso y escalable.",
    ],
  },
  "automatizacion-ia-empresas": {
    title: "Automatización con IA para Pequeñas Empresas",
    excerpt: "Descubre cómo la inteligencia artificial puede optimizar procesos y reducir costos en tu negocio.",
    author: "Diego López",
    authorRole: "Consultor de Tecnología",
    date: "5 Enero 2024",
    readTime: "6 min",
    category: "Tecnología",
    content: [
      "La inteligencia artificial ya no es solo para las grandes corporaciones. Hoy, las pequeñas y medianas empresas tienen acceso a herramientas de IA que pueden transformar sus operaciones, reducir costos y mejorar la experiencia del cliente.",
      "## ¿Qué es la Automatización con IA?",
      "La automatización con IA va más allá de la automatización tradicional. Mientras que la automatización clásica sigue reglas predefinidas, la IA puede aprender, adaptarse y tomar decisiones basadas en datos. Esto la hace ideal para tareas que antes requerían juicio humano.",
      "## Chatbots y Servicio al Cliente",
      "Los chatbots impulsados por IA pueden manejar una gran cantidad de consultas de clientes sin intervención humana. Pueden responder preguntas frecuentes, ayudar con el seguimiento de pedidos, e incluso realizar ventas básicas.",
      "Herramientas como ChatGPT API, Intercom, o Zendesk AI permiten implementar chatbots sofisticados sin necesidad de conocimientos técnicos avanzados.",
      "## Automatización de Marketing",
      "La IA puede personalizar tus campañas de marketing a escala. Desde emails personalizados basados en el comportamiento del usuario hasta recomendaciones de productos, la IA puede hacer que cada cliente se sienta especial.",
      "## Análisis Predictivo",
      "¿Qué productos se venderán mejor el próximo mes? ¿Qué clientes están en riesgo de abandonar? El análisis predictivo basado en IA puede responder estas preguntas, permitiéndote tomar decisiones proactivas.",
      "## Automatización de Procesos Internos",
      "Desde la facturación hasta la gestión de inventario, muchos procesos internos pueden ser automatizados. Herramientas como Zapier, con sus integraciones de IA, pueden conectar tus diferentes sistemas y automatizar flujos de trabajo complejos.",
      "## Por Dónde Empezar",
      "No intentes automatizar todo de una vez. Identifica los procesos que más tiempo consumen o que son más propensos a errores. Comienza con una herramienta, aprende de la experiencia, y expande gradualmente.",
      "## Conclusión",
      "La IA no reemplazará a los humanos en tu negocio, pero las empresas que usen IA superarán a las que no lo hagan. Comienza hoy, aunque sea con algo pequeño, y prepara tu negocio para el futuro.",
    ],
  },
  "branding-digital-marca": {
    title: "Branding Digital: Construye una Marca Memorable",
    excerpt: "Las claves para crear una identidad de marca que conecte emocionalmente con tu audiencia en el entorno digital.",
    author: "Laura Sánchez",
    authorRole: "Estratega de Marca",
    date: "2 Enero 2024",
    readTime: "7 min",
    category: "Branding",
    content: [
      "En un mundo digital saturado de información, crear una marca memorable es más importante que nunca. No se trata solo de un logo bonito; se trata de crear una identidad que conecte emocionalmente con tu audiencia y se distinga de la competencia.",
      "## ¿Qué es el Branding Digital?",
      "El branding digital es la práctica de crear y gestionar la identidad de tu marca en todos los canales digitales. Incluye tu sitio web, redes sociales, email marketing, publicidad online, y cualquier otro punto de contacto digital con tu audiencia.",
      "## Define tu Propósito",
      "Antes de diseñar logos o elegir colores, necesitas claridad sobre el propósito de tu marca. ¿Por qué existes más allá de ganar dinero? Las marcas con un propósito claro generan conexiones más profundas con sus clientes.",
      "## Conoce a tu Audiencia",
      "No puedes conectar con todos. Define claramente quién es tu cliente ideal: sus demografía, psicografía, comportamientos, dolores y aspiraciones. Cuanto más específico seas, más efectiva será tu comunicación.",
      "## Identidad Visual Coherente",
      "Tu identidad visual debe ser consistente en todos los canales. Esto incluye tu logo, paleta de colores, tipografía, estilo de imágenes, y cualquier otro elemento visual. Crea guías de estilo detalladas y asegúrate de que todo tu equipo las siga.",
      "## Voz y Tono de Marca",
      "¿Cómo habla tu marca? ¿Es formal o casual? ¿Seria o divertida? ¿Técnica o accesible? Tu voz debe reflejar tu personalidad de marca y resonar con tu audiencia objetivo.",
      "## Storytelling Digital",
      "Las historias conectan. Cuenta la historia de tu marca: cómo empezaste, qué desafíos superaste, qué victorias celebras. Comparte historias de clientes. Crea narrativas que inviten a tu audiencia a ser parte de algo más grande.",
      "## Experiencia de Usuario como Branding",
      "Cada interacción con tu marca es branding. Un sitio web lento, un proceso de checkout confuso, o un email mal diseñado pueden dañar tu marca tanto como un mal servicio al cliente.",
      "## Conclusión",
      "El branding digital no es un proyecto de una vez; es un proceso continuo de construcción y refuerzo de tu identidad de marca. Invierte tiempo y recursos en hacerlo bien, y cosecharás los beneficios en lealtad de clientes y diferenciación competitiva.",
    ],
  },
  "performance-web-optimizacion": {
    title: "Performance Web: Velocidad que Convierte",
    excerpt: "Cómo optimizar la velocidad de tu sitio web para mejorar la experiencia de usuario y aumentar conversiones.",
    author: "Andrés Castro",
    authorRole: "Desarrollador Senior",
    date: "28 Diciembre 2023",
    readTime: "9 min",
    category: "Desarrollo",
    content: [
      "La velocidad de tu sitio web no es solo una cuestión técnica; es un factor crítico de negocio. Un sitio lento pierde visitantes, reduce conversiones, y daña tu posicionamiento en buscadores. En esta guía, exploraremos cómo optimizar el rendimiento de tu sitio web.",
      "## ¿Por qué Importa la Velocidad?",
      "Los números son claros: el 53% de los visitantes móviles abandonan sitios que tardan más de 3 segundos en cargar. Cada segundo adicional de tiempo de carga puede reducir las conversiones hasta un 7%. Google también considera la velocidad como factor de ranking.",
      "## Core Web Vitals",
      "Google ha definido métricas específicas para medir la experiencia de usuario: LCP (Largest Contentful Paint), FID (First Input Delay), y CLS (Cumulative Layout Shift). Optimizar estas métricas mejorará tanto tu SEO como la experiencia de usuario.",
      "## Optimización de Imágenes",
      "Las imágenes suelen ser el mayor contribuyente al peso de una página. Usa formatos modernos como WebP o AVIF, implementa lazy loading, y asegúrate de servir imágenes del tamaño correcto para cada dispositivo.",
      "## Minificación y Compresión",
      "Minifica tu CSS, JavaScript, y HTML para reducir el tamaño de los archivos. Implementa compresión Gzip o Brotli en tu servidor. Estas optimizaciones pueden reducir significativamente el tiempo de transferencia.",
      "## Caching Efectivo",
      "Implementa una estrategia de caching agresiva. El contenido estático debe cachearse en el navegador del usuario y en CDN. El contenido dinámico puede cachearse en memoria o con herramientas como Redis.",
      "## CDN (Content Delivery Network)",
      "Un CDN distribuye tu contenido en servidores alrededor del mundo, reduciendo la latencia para usuarios en diferentes ubicaciones. Para sitios con audiencia internacional, un CDN es esencial.",
      "## JavaScript y Render Blocking",
      "El JavaScript puede bloquear el renderizado de la página. Usa atributos async o defer para scripts no críticos. Considera técnicas como code splitting para cargar solo el JavaScript necesario para cada página.",
      "## Monitoreo Continuo",
      "La optimización de rendimiento no es un proyecto de una vez. Implementa herramientas de monitoreo como Google Lighthouse, WebPageTest, o herramientas de Real User Monitoring (RUM) para mantener tu sitio rápido.",
      "## Conclusión",
      "Un sitio web rápido es la base de una buena experiencia digital. Invierte en optimización de rendimiento y verás mejoras en satisfacción del usuario, conversiones, y posicionamiento en buscadores.",
    ],
  },
}

const relatedPosts = [
  {
    title: "SEO Local: Cómo Posicionar tu Negocio",
    slug: "seo-local-colombia",
    category: "Marketing",
  },
  {
    title: "E-commerce en Colombia: Guía Completa",
    slug: "ecommerce-colombia-guia",
    category: "Negocio",
  },
  {
    title: "Automatización con IA",
    slug: "automatizacion-ia-empresas",
    category: "Tecnología",
  },
]

const categoryColors: Record<string, string> = {
  Diseño: "bg-pink-500/20 text-pink-400",
  Marketing: "bg-green-500/20 text-green-400",
  Negocio: "bg-yellow-500/20 text-yellow-400",
  Tecnología: "bg-purple-500/20 text-purple-400",
  Branding: "bg-orange-500/20 text-orange-400",
  Desarrollo: "bg-primary/20 text-primary",
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <p className="text-white/60 mb-8">El artículo que buscas no existe o ha sido movido.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Category */}
            <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6 ${categoryColors[post.category] || "bg-primary/20 text-primary"}`}>
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{post.author}</p>
                  <p className="text-xs text-white/50">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} lectura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-[400px] bg-gradient-to-br from-primary/20 to-card rounded-3xl overflow-hidden border border-[#009ded22]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary">{post.category.charAt(0)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                return (
                  <p key={index} className="text-white/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                )
              })}
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Share */}
              <div className="bg-card/50 rounded-2xl border border-[#009ded22] p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  Compartir
                </h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2]/30 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/30 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/30 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-card/50 rounded-2xl border border-[#009ded22] p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Artículos relacionados</h3>
                <div className="space-y-4">
                  {relatedPosts.filter(p => p.slug !== slug).map((relatedPost, index) => (
                    <Link
                      key={index}
                      href={`/blog/${relatedPost.slug}`}
                      className="block p-4 rounded-xl bg-background/50 border border-transparent hover:border-primary/30 transition-all duration-300 group"
                    >
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-medium rounded-full mb-2 ${categoryColors[relatedPost.category] || "bg-primary/20 text-primary"}`}>
                        {relatedPost.category}
                      </span>
                      <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary/20 to-card/80 rounded-2xl border border-primary/30 p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">¿Listo para comenzar?</h3>
                <p className="text-sm text-white/60 mb-6">
                  Transformemos juntos tu presencia digital
                </p>
                <Link
                  href="/#contacto"
                  className="inline-block w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
