export type ProjectLink =
  | {
    type: 'link' | 'github'
    url: string
  }
  | {
    type: 'video'
    videoId: string
  }

export type ProjectData = {
  id: string
  image: string
  technologies: string[]
  links?: ProjectLink[]
}

export const projectsData: ProjectData[] = [
  {
    id: 'portfolio',
    image: '/projects/portfolio.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
    links: [
      {
        type: 'link',
        url: 'https://lucasz.vercel.app/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/frontend-portfolio',
      },
    ],
  },
  {
    id: 'zazastro',
    image: '/projects/zazastro.png',
    technologies: [
      'react',
      'nextjs',
      'typescript',
      'd3',
      'tailwind',
      'node',
      'express',
    ],
    links: [
      {
        type: 'link',
        url: 'https://www.zazastro.com.br',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/zazastro',
      },
    ],
  },
  {
    id: 'botbot',
    image: '/projects/botbot.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
    links: [
      {
        type: 'link',
        url: 'https://front-robotics.vercel.app/robot-home',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/front_robotics',
      },
      {
        type: 'video',
        videoId: 'oWUodZ7IVRg',
      }
    ],
  },
  {
    id: 'elisa',
    image: '/projects/elisa.png',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind'],
    links: [
      {
        type: 'link',
        url: 'https://elisaferraz.adv.br/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/elisa-adv',
      },
    ],
  },
  {
    id: 'digicard',
    image: '/projects/digicard.png',
    technologies: ['angular', 'typescript', 'dotnet', 'csharp'],
    links: [
      {
        type: 'link',
        url: 'https://digimon-signalr.vercel.app/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/digimon-signalr',
      },
      {
        type: 'video',
        videoId: 'xzkA0rF5tyc'
      },
    ],
  },
  {
    id: 'oldPortfolio',
    image: '/projects/old-portfolio.png',
    technologies: ['react', 'javascript', 'styled-components'],
    links: [
      {
        type: 'link',
        url: 'https://lucasz-old-portfolio.vercel.app/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/dev-zaza',
      },
    ],
  },
  {
    id: 'marcos',
    image: '/projects/marcos.png',
    technologies: ['react', 'javascript', 'styled-components'],
    links: [
      {
        type: 'link',
        url: 'https://constellations-of-marcos.vercel.app/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/constellations-of-marcos',
      },
    ],
  },
  {
    id: 'games',
    image: '/projects/games.png',
    technologies: ['react', 'javascript', 'css', 'unity', 'csharp'],
    links: [
      {
        type: 'link',
        url: 'https://lucaszaranza-gamedev.netlify.app/',
      },
      {
        type: 'github',
        url: 'https://github.com/lucaspzaranza/my-game-portfolio',
      },
    ],
  },
]
