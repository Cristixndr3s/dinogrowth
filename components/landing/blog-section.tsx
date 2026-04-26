"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import type { Post } from "@/lib/blog"

const categoryColors: Record<string, string> = {
  "Presencia Digital": "bg-blue-500/20 text-blue-400",
  "SEO": "bg-green-500/20 text-green-400",
  "IA para Negocios": "bg-purple-500/20 text-purple-400",
  "Ventas Online": "bg-orange-500/20 text-orange-400",
  "Casos de Éxito": "bg-pink-500/20 text-pink-400",
}

export function BlogSection({ posts }: { posts: Post[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScrollability, 300)
    }
  }

  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-1/3 h-96 bg-primary/5 blur-[128px] rounded-full" />
      <div className="absolute right-0 bottom-1/4 w-1/4 h-64 bg-primary/3 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.9] text-balance">
              Nuestro
              <span className="block mt-2 text-primary">Blog</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Insights, tendencias y estrategias para impulsar tu presencia digital 
              en el mercado colombiano.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-primary/50 text-white hover:bg-primary/10 hover:border-primary"
                  : "border-white/10 text-white/30 cursor-not-allowed"
              }`}
              aria-label="Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-primary/50 text-white hover:bg-primary/10 hover:border-primary"
                  : "border-white/10 text-white/30 cursor-not-allowed"
              }`}
              aria-label="Siguiente"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >

          {/* Scrollable container */}
          <div
            ref={carouselRef}
            onScroll={checkScrollability}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[380px]"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="relative bg-card/50 rounded-2xl border border-[#009ded22] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,157,237,0.1)]">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-card">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-card flex items-center justify-center">
                          <span className="text-3xl font-bold text-primary">{post.category.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${categoryColors[post.category] || "bg-primary/20 text-primary"}`}>
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-white/60 line-clamp-2 mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-white/50">
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
                      </div>
                    </div>

                    {/* Read more indicator */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 text-white font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
