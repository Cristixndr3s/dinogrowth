"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

const blogPosts = [
  {
    id: 1,
    title: "Tendencias de Diseño Web que Dominarán el 2024",
    excerpt: "Exploramos las últimas tendencias en diseño web: desde el minimalismo radical hasta las experiencias inmersivas con scroll animations. Descubre cómo estas tendencias pueden transformar tu presencia digital.",
    image: "/blog/design-trends.jpg",
    author: "María González",
    date: "15 Ene 2024",
    readTime: "5 min",
    category: "Diseño",
    slug: "tendencias-diseno-web-2024",
    featured: true,
  },
  {
    id: 2,
    title: "SEO Local: Cómo Posicionar tu Negocio en Colombia",
    excerpt: "Guía completa para dominar las búsquedas locales y atraer más clientes a tu negocio en el mercado colombiano.",
    image: "/blog/seo-local.jpg",
    author: "Carlos Ramírez",
    date: "12 Ene 2024",
    readTime: "8 min",
    category: "Marketing",
    slug: "seo-local-colombia",
    featured: false,
  },
  {
    id: 3,
    title: "E-commerce en Colombia: Guía Completa para 2024",
    excerpt: "Todo lo que necesitas saber para lanzar y escalar tu tienda online en el mercado colombiano con éxito.",
    image: "/blog/ecommerce.jpg",
    author: "Ana Martínez",
    date: "8 Ene 2024",
    readTime: "12 min",
    category: "Negocio",
    slug: "ecommerce-colombia-guia",
    featured: false,
  },
  {
    id: 4,
    title: "Automatización con IA para Pequeñas Empresas",
    excerpt: "Descubre cómo la inteligencia artificial puede optimizar procesos y reducir costos en tu negocio.",
    image: "/blog/ai-automation.jpg",
    author: "Diego López",
    date: "5 Ene 2024",
    readTime: "6 min",
    category: "Tecnología",
    slug: "automatizacion-ia-empresas",
    featured: false,
  },
  {
    id: 5,
    title: "Branding Digital: Construye una Marca Memorable",
    excerpt: "Las claves para crear una identidad de marca que conecte emocionalmente con tu audiencia en el entorno digital.",
    image: "/blog/branding.jpg",
    author: "Laura Sánchez",
    date: "2 Ene 2024",
    readTime: "7 min",
    category: "Branding",
    slug: "branding-digital-marca",
    featured: false,
  },
  {
    id: 6,
    title: "Performance Web: Velocidad que Convierte",
    excerpt: "Cómo optimizar la velocidad de tu sitio web para mejorar la experiencia de usuario y aumentar conversiones.",
    image: "/blog/performance.jpg",
    author: "Andrés Castro",
    date: "28 Dic 2023",
    readTime: "9 min",
    category: "Desarrollo",
    slug: "performance-web-optimizacion",
    featured: false,
  },
]

const categories = ["Todos", "Diseño", "Marketing", "Negocio", "Tecnología", "Branding", "Desarrollo"]

const categoryColors: Record<string, string> = {
  Diseño: "bg-pink-500/20 text-pink-400",
  Marketing: "bg-green-500/20 text-green-400",
  Negocio: "bg-yellow-500/20 text-yellow-400",
  Tecnología: "bg-purple-500/20 text-purple-400",
  Branding: "bg-orange-500/20 text-orange-400",
  Desarrollo: "bg-primary/20 text-primary",
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || activeCategory !== "Todos")

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9]">
              Nuestro
              <span className="block mt-2 text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
              Explorá insights, tendencias y estrategias para impulsar 
              tu presencia digital en el mercado colombiano.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto mt-10"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-14 pr-6 bg-card/50 border border-[#009ded22] rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card/50 border border-[#009ded22] text-white/70 hover:border-primary/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "Todos" && featuredPost && !searchQuery && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative bg-card/50 rounded-3xl border border-[#009ded22] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(0,157,237,0.15)]">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-[400px] overflow-hidden bg-gradient-to-br from-primary/20 to-card">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-5xl font-bold text-primary">{featuredPost.category.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/20 text-primary rounded-full mb-6 w-fit">
                        Destacado
                      </span>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit ${categoryColors[featuredPost.category]}`}>
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/60 mb-6 leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-white/50">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} lectura
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="relative bg-card/50 rounded-2xl border border-[#009ded22] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,157,237,0.1)] h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-card">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{post.category.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit ${categoryColors[post.category] || "bg-primary/20 text-primary"}`}>
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2 mb-5 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/50 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
