export type ProjectData = {
  id: string
  image: string
  technologies: string[]
}

export const projectsData: ProjectData[] = [
  {
    id: 'portfolio',
    image: '/projects/portfolio.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
  },
  {
    id: 'zazastro',
    image: '/projects/zazastro.png',
    technologies: ['react', 'nextjs', 'typescript', 'd3', 'tailwind', 'node', 'express'],
  },
  {
    id: 'botbot',
    image: '/projects/botbot.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
  },
  {
    id: 'elisa',
    image: '/projects/elisa.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
  },
  {
    id: 'digicard',
    image: '/projects/digicard.png',
    technologies: ['angular', 'typescript', 'dotnet', 'csharp'],
  },
  {
    id: 'oldPortfolio',
    image: '/projects/old-portfolio.png',
    technologies: ['react', 'javascript', 'styled-components'],
  },
  {
    id: 'marcos',
    image: '/projects/marcos.png',
    technologies: ['react', 'javascript', 'styled-components'],
  },
  {
    id: 'games',
    image: '/projects/games.png',
    technologies: ['react', 'javascript', 'css', 'unity', 'csharp'],
  },
]
