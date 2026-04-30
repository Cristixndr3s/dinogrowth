import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Share2, Twitter } from "lucide-react"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

const categoryColors: Record<string, string> = {
  "Presencia Digital": "bg-blue-500/20 text-blue-400",
  "SEO": "bg-green-500/20 text-green-400",
  "IA para Negocios": "bg-purple-500/20 text-purple-400",
  "Ventas Online": "bg-orange-500/20 text-orange-400",
  "Casos de Éxito": "bg-pink-500/20 text-pink-400",
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { frontmatter } = post
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt || frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt || frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      url: `https://dinogrowth.com/blog/${slug}`,
      images: frontmatter.image ? [{ url: frontmatter.image, width: 1200, height: 630 }] : [{ url: '/og-image.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt || frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : ['/og-image.jpg'],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content } = post
  const allPosts = getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="max-w-4xl">
            <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6 ${categoryColors[frontmatter.category] || "bg-primary/20 text-primary"}`}>
              {frontmatter.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div>
                <p className="text-sm text-white font-medium">{frontmatter.author}</p>
                <p className="text-xs text-white/50">{frontmatter.authorRole}</p>
              </div>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {frontmatter.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {frontmatter.readTime} lectura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="relative h-64 md:h-[600px] bg-card rounded-3xl overflow-hidden border border-[#009ded22]">
            {frontmatter.image ? (
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-card">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">{frontmatter.category.charAt(0)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* MDX Content */}
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white prose-a:text-primary prose-hr:border-white/10 prose-th:text-white prose-td:text-white/80">
              <MDXRemote source={content} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
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
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
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
                <p className="text-sm text-white/60 mb-6">Tu sitio web en días, no en semanas.</p>
                <Link
                  href="/#contacto"
                  className="inline-block w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
