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
    default: 'Dinogrowth | Sitios Web con IA en Colombia — Entrega en Días',
    template: '%s | Dinogrowth',
  },
  description: 'Agencia web con IA en Colombia. Creamos sitios web, tiendas online y software en 3 a 7 días desde $600.000 COP. Más rápido que una agencia, más profesional que un freelancer.',
  keywords: [
    'agencia web colombia',
    'diseño web colombia',
    'páginas web para pymes colombia',
    'sitios web profesionales colombia',
    'diseño web bogotá',
    'agencia digital con ia colombia',
    'tienda online colombia',
    'landing page colombia',
    'desarrollo web con inteligencia artificial',
    'agencia seo colombia',
  ],
  authors: [{ name: 'Dinogrowth' }],
  creator: 'Dinogrowth',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://dinogrowth.com',
    siteName: 'Dinogrowth',
    title: 'Tu sitio web profesional listo en días — Dinogrowth Colombia',
    description: 'Sitios web, e-commerce y software con IA desde $600.000 COP. Entrega en 3 a 7 días. Sin agencias lentas, sin freelancers improvisados.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dinogrowth — Sitios web con IA en Colombia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu sitio web profesional listo en días — Dinogrowth Colombia',
    description: 'Sitios web, e-commerce y software con IA desde $600.000 COP. Entrega en 3 a 7 días. Sin agencias lentas, sin freelancers improvisados.',
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
