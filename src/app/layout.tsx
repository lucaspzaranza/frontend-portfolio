import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: "Lucas Zaranza | Frontend Developer",
  description: "Frontend portfolio with React and Next.js",
  icons: {
    icon: "code.png",
  },
  openGraph: {
    title: "Lucas Zaranza | Frontend Developer",
    description: "Frontend portfolio with React and Next.js",
    url: "https://lucasz.vercel.app/",
    siteName: "Lucas Zaranza's Portfolio",
    images: [
      {
        url: "https://lucasz.vercel.app/code.png", // coloque esse arquivo em /public
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
    <html lang="pt" className="dark">
      <body className="bg-zinc-950 text-zinc-100">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}