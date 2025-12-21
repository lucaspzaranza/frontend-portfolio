'use client'

import { useEffect } from 'react'

type YoutubeModalProps = {
  videoId: string
  onClose: () => void
}

export default function YoutubeModal({
  videoId,
  onClose,
}: YoutubeModalProps) {
  // trava scroll do body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/80
        flex items-center justify-center
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-4xl
          aspect-video
          bg-black rounded-xl overflow-hidden
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 z-10
            text-white text-2xl
            hover:text-yellow-400 transition
          "
          aria-label="Fechar vídeo"
        >
          ×
        </button>

        {/* Player */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="
            autoplay;
            encrypted-media;
            picture-in-picture
          "
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
