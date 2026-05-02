import type { Metadata } from 'next'
import { Header } from "@/components/landing/header"

export const metadata: Metadata = {
  title: 'Dinogrowth | Sitios Web Profesionales en Días con IA — Desde $600k',
  description: 'Diseñamos y desarrollamos tu sitio web, tienda online o software en 3 a 7 días usando IA. Para pymes y emprendedores en Colombia. Desde $600.000 COP.',
  openGraph: {
    title: 'Tu sitio web profesional listo en días — Dinogrowth Colombia',
    description: 'Diseñamos y desarrollamos tu sitio web, tienda online o software en 3 a 7 días usando IA. Para pymes y emprendedores en Colombia. Desde $600.000 COP.',
    url: 'https://dinogrowth.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu sitio web profesional listo en días — Dinogrowth Colombia',
    description: 'Diseñamos y desarrollamos tu sitio web, tienda online o software en 3 a 7 días usando IA. Para pymes y emprendedores en Colombia. Desde $600.000 COP.',
  },
}
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Workflow } from "@/components/landing/workflow"
import { BlogSection } from "@/components/landing/blog-section"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { getAllPosts } from "@/lib/blog"

export default function Home() {
  const posts = getAllPosts().slice(0, 6)

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Workflow />
      <BlogSection posts={posts} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
