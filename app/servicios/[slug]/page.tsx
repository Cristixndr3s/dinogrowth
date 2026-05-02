import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services"
import { ServicePageClient } from "@/components/servicios/service-page-client"


const seoMeta: Record<string, { title: string; description: string }> = {
  'sitios-web': {
    title: 'Diseño Web Profesional en Colombia — Sitios que Convierten Visitas en Clientes',
    description: 'Creamos tu sitio web profesional en 5 a 7 días con IA. Diseño moderno, carga rápida y optimizado para Google. Para pymes y emprendedores desde $600.000 COP.',
  },
  'software-a-la-medida': {
    title: 'Software a la Medida en Colombia — Automatización con IA para tu Negocio',
    description: 'Desarrollamos software personalizado que automatiza tus procesos y elimina tareas manuales. Soluciones a medida para pymes colombianas con inteligencia artificial.',
  },
  'ecommerce': {
    title: 'Tienda Online en Colombia — E-commerce Profesional desde $600k',
    description: 'Creamos tu tienda online con carrito, pagos (PSE, Nequi, Wompi) y catálogo en menos de 7 días. Vende 24/7 sin depender de Instagram o WhatsApp.',
  },
  'mvp': {
    title: 'Desarrollo de MVP en Colombia — Lanza tu Idea en Tiempo Récord con IA',
    description: 'Validamos tu idea de negocio digital con un MVP funcional en días. Menos inversión, más velocidad. Tecnología moderna y escalable desde el primer día.',
  },
  'webmaster': {
    title: 'Webmaster Profesional en Colombia — Mantenimiento Web Mensual',
    description: 'Tu sitio web siempre activo, seguro y actualizado. Servicio de webmaster proactivo para pymes colombianas. Soporte prioritario y reportes mensuales.',
  },
  'seo': {
    title: 'Posicionamiento SEO en Colombia — Aparece en Google y Atrae Clientes',
    description: 'Posicionamos tu negocio en los primeros resultados de Google con SEO técnico y de contenido. Más tráfico orgánico, menos dependencia de la publicidad pagada.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return {}
  const meta = seoMeta[slug] ?? { title: service.title, description: service.subtitle }
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://dinogrowth.com/servicios/${slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!servicesData[slug]) notFound()
  return <ServicePageClient slug={slug} />
}
