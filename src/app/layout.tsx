import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Lucas Zaranza | Frontend Developer',
  description: 'Frontend portfolio with React and Next.js',
}

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