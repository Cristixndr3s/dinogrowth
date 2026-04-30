import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services"
import { ServicePageClient } from "@/components/servicios/service-page-client"


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

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!servicesData[slug]) notFound()
  return <ServicePageClient slug={slug} />
}
