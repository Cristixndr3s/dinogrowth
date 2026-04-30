import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
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
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58TZX7QQ');`}
          </Script>
        )}
      </head>
      <body className={`${lexendDeca.variable} font-sans antialiased`}>
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-58TZX7QQ"
              height="0" width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-9R1W10WJ99" />}
    </html>
  )
}
