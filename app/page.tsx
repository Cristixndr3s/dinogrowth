import type { Metadata } from 'next'
import { Header } from "@/components/landing/header"

export const metadata: Metadata = {
  title: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
  description: 'Creamos sitios web, software y tiendas online para negocios colombianos usando inteligencia artificial. Entrega en días, precios justos.',
  openGraph: {
    title: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
    description: 'Creamos sitios web, software y tiendas online para negocios colombianos usando inteligencia artificial. Entrega en días, precios justos.',
    url: 'https://dinogrowth.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
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
