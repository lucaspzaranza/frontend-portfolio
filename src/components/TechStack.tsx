'use client'

import clsx from 'clsx'
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaUnity
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiD3Dotjs,
  SiExpress,
  SiStyledcomponents
} from 'react-icons/si'

import { TbBrandCSharp } from "react-icons/tb";

type TechStackProps = {
  technologies: string[]
  size?: number
  color?: string
  className?: string
}

const techIconMap: Record<
  string,
  { icon: React.ElementType; label: string }
> = {
  react: { icon: FaReact, label: 'React' },
  nextjs: { icon: SiNextdotjs, label: 'Next.js' },
  angular: { icon: FaAngular, label: 'Angular' },
  dotnet: { icon: SiDotnet, label: '.NET' },
  csharp: { icon: TbBrandCSharp, label: 'C#' },
  typescript: { icon: SiTypescript, label: 'TypeScript' },
  javascript: { icon: SiJavascript, label: 'JavaScript' },
  node: { icon: FaNodeJs, label: 'Node.js' },
  tailwind: { icon: SiTailwindcss, label: 'Tailwind CSS' },
  html: { icon: FaHtml5, label: 'HTML5' },
  css: { icon: FaCss3Alt, label: 'CSS3' },
  git: { icon: FaGitAlt, label: 'Git' },
  d3: { icon: SiD3Dotjs, label: 'D3.js' },
  express: { icon: SiExpress, label: 'Express.js' },
  unity: { icon: FaUnity, label: 'Unity3D' },
  'styled-components': { icon: SiStyledcomponents, label: 'Styled Components' },
}

export default function TechStack({
  technologies,
  size = 22,
  color = '#facc15', // yellow-400
  className,
}: TechStackProps) {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center gap-4 w-full',
        className
      )}
    >
      {technologies.map(tech => {
        const techData = techIconMap[tech.toLowerCase()]

        if (!techData) return null

        const Icon = techData.icon

        return (
          <div
            key={tech}
            className="flex flex-col items-center text-center text-xs text-zinc-400"
          >
            <Icon size={size} color={color} />
            <span className="mt-1">{techData.label}</span>
          </div>
        )
      })}
    </div>
  )
}
