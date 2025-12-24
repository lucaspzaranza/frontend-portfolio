import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: "Lucas Zaranza | Frontend Developer • React • Next.js • TypeScript",
  description: "Frontend Developer specialized in React, Next.js and TypeScript. Portfolio with real projects, clean UI and modern web technologies.",
  icons: {
    icon: "code.png",
  },
  openGraph: {
    title: "Lucas Zaranza | Frontend Developer • React • Next.js • TypeScript",
    description: "Frontend Developer specialized in React, Next.js and TypeScript. Portfolio with real projects, clean UI and modern web technologies.",
    url: "https://www.lucaszaranza.com.br/",
    siteName: "Lucas Zaranza's Portfolio",
    images: [
      {
        url: "https://www.lucaszaranza.com.br/og-card-1.png",
        width: 1200,
        height: 630,
        alt: "Preview do Meu Projeto",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="
        text-zinc-100
        bg-zinc-950
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_2px,transparent_2px)]
        bg-size-[32px_32px]
      ">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}