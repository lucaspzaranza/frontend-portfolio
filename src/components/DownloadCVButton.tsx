'use client'

import clsx from 'clsx'
import { useLanguage } from '@/context/LanguageContext'
import { FaDownload } from 'react-icons/fa'

type DownloadCVButtonProps = {
  variant?: 'compact' | 'default'
  className?: string
}

const DownloadCVButton = ({
  variant = 'default',
  className,
}: DownloadCVButtonProps) => {
  const { language, t } = useLanguage()

  const isCompact = variant === 'compact'

  const filePath =
    language === 'pt'
      ? '/Lucas_Zaranza_CV_PT.pdf'
      : '/Lucas_Zaranza_CV_EN.pdf'

  return (
    <div
      className={clsx(
        'flex flex-col items-center mt-1',
        !isCompact && 'gap-4'
      )}
    >
      {/* Título (somente no modo default) */}
      {!isCompact && (
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t.contact.downloadCV ?? 'Currículo'}
        </h2>
      )}

      <a
        href={filePath}
        download
        className={clsx(
          'inline-flex items-center gap-2 rounded-full font-medium transition-colors',
          isCompact
            ? 'px-5 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 text-yellow-400'
            : 'px-16 py-4 text-xl bg-zinc-800 hover:bg-zinc-700 text-yellow-400',
          className
        )}
        aria-label={t.home.downloadCv ?? 'Download CV'}
      >
        <FaDownload size={isCompact ? 16 : 18} />
        {t.home.downloadCv ?? 'Download CV'}
      </a>
    </div>
  )
}

export default DownloadCVButton
