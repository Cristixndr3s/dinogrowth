import { Header } from "@/components/landing/header"
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
