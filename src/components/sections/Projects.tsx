'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import clsx from 'clsx'
import { FaArrowLeft } from 'react-icons/fa6'

type Project = {
  id: string
  image: string
}

const projects: Project[] = [
  {
    id: 'portfolio',
    image: '/projects/portfolio.png',
  },
  {
    id: 'zazastro',
    image: '/projects/zazastro.png',
  },
  {
    id: 'botbot',
    image: '/projects/botbot.png',
  },
  {
    id: 'elisa',
    image: '/projects/elisa.png',
  },
  {
    id: 'marcos',
    image: '/projects/marcos.png',
  },
  {
    id: 'games',
    image: '/projects/games.png',
  }
  // você vai adicionando aqui
]

function ProjectsGrid({ projects, onSelect, t }: any) {
  return (
    <div
      className="
        grid gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {projects.map((project: any) => (
        <button
          key={project.id}
          onClick={() => onSelect(project.id)}
          className="group"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
            <Image
              src={project.image}
              alt={t.projects.items[project.id].title}
              fill
              className="
                object-cover
                transition-transform duration-300
                group-hover:scale-105
              "
              unoptimized
            />
          </div>

          <h3 className="mt-4 text-lg font-semibold text-center">
            {t.projects.items[project.id].title}
          </h3>
        </button>
      ))}
    </div>
  )
}

function ProjectsDetailsLayout({
  projects,
  selectedProject,
  onSelect,
  t,
}: any) {
  const project = projects.find((p: any) => p.id === selectedProject)

  if (!project) return null

  return (
    <div className="flex gap-12">

      {/* Lista à esquerda */}
      <div className="w-1/3 space-y-6">
        {projects.map((p: any) => {
          const isSelected = p.id === selectedProject

          return (
            <button
              key={p.id}
              onClick={() => onSelect(p.id)}
              className={`
                relative w-full h-28 md:h-32 rounded-xl overflow-hidden
                border transition group
                ${isSelected
                  ? 'ring-2 ring-yellow-400 border-transparent'
                  : 'border-zinc-800 hover:border-zinc-600'
                }
              `}
            >

              {/* Background image */}
              <Image
                src={p.image}
                alt={t.projects.items[p.id].title}
                fill
                className="
                  object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
                unoptimized
              />

              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 transition
                  ${isSelected
                    ? 'bg-zinc-950/30'
                    : 'bg-zinc-950/70 group-hover:bg-zinc-950/55'
                  }
              `}
              />

              {/* Title */}
              <div className="relative z-10 h-full flex items-end p-4">
                <span className="text-lg font-semibold">
                  {t.projects.items[p.id].title}
                </span>
              </div>
            </button>
          )
        })}
      </div>


      {/* Detalhes à direita */}
      <div className="w-2/3">

        {/* Header dos detalhes */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onSelect(null)}
            className="
              flex flex-row gap-1 items-center text-zinc-400 hover:text-yellow-400 transition
            "
          >
            <FaArrowLeft size={20} /> <span>{t.projects.backToGrid}</span>
          </button>

          <button
            onClick={() => onSelect(null)}
            aria-label="Fechar detalhes do projeto"
            className="
              text-zinc-400 hover:text-yellow-400
              text-2xl leading-none transition
            "
          >
            ×
          </button>
        </div>

        {/* Imagem */}
        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-zinc-800">
          <Image
            src={project.image}
            alt={t.projects.items[project.id].title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Conteúdo */}
        <h3 className="text-3xl font-bold mb-4">
          {t.projects.items[project.id].title}
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed whitespace-pre-line">
          {t.projects.items[project.id].description}
        </p>
      </div>
    </div>
  )
}

function MobileProjectItem({ project, t }: any) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full"
      >
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={t.projects.items[project.id].title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <h3 className="p-4 text-lg font-semibold text-center">
          {t.projects.items[project.id].title}
        </h3>
      </button>

      {open && (
        <div className="p-4 text-zinc-400 whitespace-pre-line">
          {t.projects.items[project.id].description}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <section id="projects" className="min-h-screen py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        {t.projects.title}
      </h2>

      {/* DESKTOP */}
      <div className="hidden md:block">
        {!selectedProject ? (
          <ProjectsGrid
            projects={projects}
            onSelect={setSelectedProject}
            t={t}
          />
        ) : (
          <ProjectsDetailsLayout
            projects={projects}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
            t={t}
          />
        )}
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-6">
        {projects.map(project => (
          <MobileProjectItem
            key={project.id}
            project={project}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
