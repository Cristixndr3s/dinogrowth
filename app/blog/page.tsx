import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Diseño Web, SEO e IA para Negocios en Colombia',
  description: 'Guías, estrategias y casos reales sobre diseño web, SEO, e-commerce e inteligencia artificial para pymes y emprendedores colombianos.',
  openGraph: {
    title: 'Blog — Diseño Web, SEO e IA para Negocios en Colombia',
    description: 'Guías, estrategias y casos reales sobre diseño web, SEO, e-commerce e inteligencia artificial para pymes y emprendedores colombianos.',
    url: 'https://dinogrowth.com/blog',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Diseño Web, SEO e IA para Negocios en Colombia',
    description: 'Guías, estrategias y casos reales sobre diseño web, SEO, e-commerce e inteligencia artificial para pymes y emprendedores colombianos.',
  },
}

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { BlogList } from "@/components/blog/blog-list"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9]">
              Nuestro
              <span className="block mt-2 text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
              Insights, tendencias y estrategias para impulsar tu presencia digital en Colombia y LATAM.
            </p>
          </div>

          <BlogList posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
