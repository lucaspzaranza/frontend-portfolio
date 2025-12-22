'use client'

import clsx from 'clsx'
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaUnity,
  FaDatabase
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiD3Dotjs,
  SiExpress,
  SiStyledcomponents,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si'
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from 'react-icons/tb'

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

  // 🔹 SQL / Databases
  pgsql: { icon: SiPostgresql, label: 'PostgreSQL' },
  database: { icon: FaDatabase, label: 'SQL' },
  sqlserver: { icon: DiMsqlServer, label: 'SQL Server' },
}

export default function TechStack({
  technologies,
  size = 32,
  color = '#facc15',
  className,
}: TechStackProps) {
  return (
    <div
      className={clsx(
        'flex flex-wrap justify-center gap-6',
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
            className="flex flex-col items-center text-center text-xs md:text-sm text-zinc-400"
          >
            <Icon size={size} color={color} />
            <span className="mt-2">{techData.label}</span>
          </div>
        )
      })}
    </div>
  )
}
