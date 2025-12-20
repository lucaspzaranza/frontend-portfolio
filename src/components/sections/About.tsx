'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row gap-12 w-full">

        {/* Lado esquerdo: título + avatar */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.about.title}
          </h2>

          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-zinc-800">
            <Image
              src="/profile.png"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Lado direito: descrição */}
        <div className="md:w-2/3 text-zinc-400 text-lg leading-relaxed whitespace-pre-line">
          {t.about.description}
        </div>

      </div>
    </div>
  )
}
