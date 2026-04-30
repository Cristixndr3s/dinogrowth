"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import type { Post } from "@/lib/blog"

const categoryColors: Record<string, string> = {
  "Presencia Digital": "bg-blue-500/20 text-blue-400",
  "SEO": "bg-green-500/20 text-green-400",
  "IA para Negocios": "bg-purple-500/20 text-purple-400",
  "Ventas Online": "bg-orange-500/20 text-orange-400",
  "Casos de Éxito": "bg-pink-500/20 text-pink-400",
}

export function BlogList({ posts }: { posts: Post[] }) {
  const categories = ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))]
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  // El post destacado: primero con featured:true, si no el más reciente
  const featuredPost = posts.find((p) => p.featured) ?? posts[0]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Los posts normales son todos los filtrados, excepto el destacado si estamos en la vista general
  const regularPosts = filteredPosts.filter((p) => {
    const isFeaturedInHome = activeCategory === "Todos" && !searchQuery && p.slug === featuredPost?.slug
    return !isFeaturedInHome
  })

  return (
    <>
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

      {/* Featured Post */}
      {activeCategory === "Todos" && featuredPost && !searchQuery && (
        <section className="pb-16 md:pb-20 mt-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative bg-card/50 rounded-3xl border border-[#009ded22] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(0,157,237,0.15)]">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-[400px] overflow-hidden bg-card">
                      {featuredPost.image ? (
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-card flex items-center justify-center">
                          <span className="text-5xl font-bold text-primary">{featuredPost.category.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary/20 text-primary rounded-full mb-6 w-fit">
                        Destacado
                      </span>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit ${categoryColors[featuredPost.category] || "bg-primary/20 text-primary"}`}>
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/60 mb-6 leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
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
      <section className="pt-12 pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="relative bg-card/50 rounded-2xl border border-[#009ded22] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,157,237,0.1)] h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-card">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-card flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{post.category.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
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
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-white/60 text-lg">No se encontraron artículos.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
