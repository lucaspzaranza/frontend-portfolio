'use client'

import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
} from 'react-icons/fa'
import { ProjectLink } from '@/data/projects.data'

type LinkType = 'github' | 'link' | 'video'

type ProjectLinksProps = {
  links?: ProjectLink[]
  onVideoClick?: (videoId: string) => void
}

const iconMap: Record<
  LinkType,
  {
    icon: React.ElementType
    color: string
    label: string
  }
> = {
  github: {
    icon: FaGithub,
    color: '#ffffff', // branco (invertido no fundo escuro)
    label: 'GitHub',
  },
  link: {
    icon: FaExternalLinkAlt,
    color: '#ffffff', // yellow-400
    label: 'Link',
  },
  video: {
    icon: FaYoutube,
    color: '#ff0000', // vermelho oficial do YouTube
    label: 'YouTube',
  },
}

export default function ProjectLinks({
  links,
  onVideoClick,
}: ProjectLinksProps) {
  if (!links || links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {links.map(link => {
        const config = iconMap[link.type as LinkType]
        if (!config) return null

        const Icon = config.icon

        // 🎬 YouTube → abre modal
        if (link.type === 'video') {
          return (
            <button
              key={link.videoId}
              onClick={() =>
                onVideoClick?.(link.videoId)
              }
              className="
                flex items-center gap-2
                px-4 py-2
                border border-zinc-800 rounded-lg
                text-sm text-zinc-300
                hover:border-yellow-400
                transition
              "
            >
              <Icon size={16} color={config.color} />
              <span className="hover:text-yellow-400 transition">
                {config.label}
              </span>
            </button>
          )
        }

        // 🌐 GitHub / Link externo
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2
              border border-zinc-800 rounded-lg
              text-sm text-zinc-300
              hover:border-yellow-400
              transition
            "
          >
            <Icon size={16} color={config.color} />
            <span className="hover:text-yellow-400 transition">
              {config.label}
            </span>
          </a>
        )
      })}
    </div>
  )
}
