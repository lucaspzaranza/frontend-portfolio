'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { FaArrowDown } from "react-icons/fa6";
import ContactButtons from '../ContactButtons';
import DownloadCVButton from '../DownloadCVButton'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center pt-16 pb-8 md:py-32">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">

        <div className='flex flex-col w-full md:w-1/2'>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.home.title}
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mb-4">
            {t.home.subtitle}
          </p>

          <div className="flex flex-col gap-4 items-start">
            <DownloadCVButton variant="compact" />
            <ContactButtons variant="compact" align="start" />
          </div>
        </div>

        <div className="relative overflow-hidden border border-zinc-800 rounded-md w-80 h-90 md:w-120 md:h-160">
          <Image
            src="/home.jpeg"
            alt="Foto de perfil"
            className="object-cover"
            width={960}
            height={1280}
            priority
          />
        </div>

        {/* Seta indicativa */}
        <a
          href="#about"
          className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 hover:text-zinc-200 transition-colors"
          aria-label="Scroll para baixo"
        >
          <FaArrowDown size={25} />
        </a>

      </div>
    </div>
  )
}
