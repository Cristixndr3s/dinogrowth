import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Workflow } from "@/components/landing/workflow"
import { BlogSection } from "@/components/landing/blog-section"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Workflow />
      <BlogSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
