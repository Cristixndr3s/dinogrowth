import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lexendDeca = Lexend_Deca({ 
  subsets: ["latin"],
  variable: '--font-lexend-deca'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dinogrowth.com'),
  title: {
    default: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
    template: '%s | Dinogrowth',
  },
  description: 'Transformamos marcas colombianas con el poder de la IA. Sitios web profesionales, rápidos y económicos.',
  keywords: ['agencia digital colombia', 'diseño web colombia', 'páginas web colombia', 'inteligencia artificial negocios', 'sitios web baratos colombia', 'agencia ia bogota'],
  authors: [{ name: 'Dinogrowth' }],
  creator: 'Dinogrowth',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://dinogrowth.com',
    siteName: 'Dinogrowth',
    title: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
    description: 'Transformamos marcas colombianas con el poder de la IA. Sitios web profesionales, rápidos y económicos.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dinogrowth - Agencia Digital IA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
    description: 'Transformamos marcas colombianas con el poder de la IA. Sitios web profesionales, rápidos y económicos.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${lexendDeca.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
