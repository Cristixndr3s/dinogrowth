import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lexendDeca = Lexend_Deca({ 
  subsets: ["latin"],
  variable: '--font-lexend-deca'
});

export const metadata: Metadata = {
  title: 'Dinogrowth | Agencia Digital Potenciada por IA en Colombia',
  description: 'Transformamos marcas colombianas con el poder de la IA. Sitios web profesionales, rápidos y económicos.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
