export const en = {
  menu: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  home: {
    title: "Hi, I'm Lucas Zaranza.",
    subtitle: 'Fullstack Developer specialist in Frontend.',
    downloadCv: 'Download CV',
  },
  about: {
    title: 'About Me',
    skillsTitle: "Main Skills",
    description:
      `
        I am a developer with over 11 years of experience, starting my career in the game industry working with Unity3D and C#. Over time, I turned game development into a hobby and shifted my focus to software development, working as a Fullstack Developer with:

        Frontend: Angular and React

        Backend: .NET

        Databases: SQL Server, PostgreSQL, MySQL, and MongoDB

        I have strong experience collaborating in Agile teams, contributing to high-quality deliveries, scalable architectures, and well-structured code.
        Driven by continuous learning, I enjoy building clean, efficient, and meaningful solutions.

        Nice to meet you — always open to new connections.
      `,
    ageLabel: 'years',
    info: {
      name: 'Lucas Zaranza',
      location: 'Fortaleza, CE | São Paulo, SP - Brazil',
      university: 'UECE - Ceará State University',
      degree: 'Computer Science (2011 - 2017)',
    },
  },
  projects: {
    title: 'Projects',
    backToGrid: 'Back to projects',
    items: {
      portfolio: {
        title: 'My Frontend Portfolio',
        description:
          'My personal portfolio developed with React, Next.js, TypeScript, and Tailwind CSS.',
      },
      zazastro: {
        title: 'Zazastro – Astrology Website',
        description: `I developed my own Astrology website with Birth Chart visualization tools that I felt were missing from other platforms.
      I used React, Next.js, TypeScript, and Tailwind CSS on the frontend.
      The Birth Chart rendering was built using the D3.js library for graphical visualization.
      On the backend, I used Node.js with Express and the Swiss Ephemeris library for accurate astrological calculations.`,
      },
      botbot: {
        title: 'Robot Management Dashboard',
        description: `A web dashboard for robot management, allowing users to monitor information, visualize coordinates, and send commands.
      Integrated with AI for intelligent responses through a chat interface, along with camera feeds displayed on the frontend.
      Developed with TypeScript, React, Tailwind CSS, and the ROSLIB library for sending and receiving robot messages and data.`
      },
      elisa: {
        title: 'Elisa Ferraz Landing Page',
        description: `A freelance project where I developed a landing page for the lawyer Elisa Ferraz.
      I used React, TypeScript, and Tailwind CSS to create a modern and responsive interface that highlights the legal services offered.`,
      },
      digicard: {
        title: 'Digimon Card Game',
        description: `A multiplayer digital card game based on the Digimon universe, where players can battle using virtual cards.
      Developed with Angular on the frontend and .NET with C# on the backend, using SignalR for real-time communication between players, focusing on an engaging and interactive user experience. Styling was done using Material UI components.
      Tip: to test locally, open one normal browser window and another in incognito mode.`,
      },
      oldPortfolio: {
        title: 'My Old Portfolio',
        description: `My previous portfolio, developed with React and TypeScript.
      I used Styled Components for project styling.`,
      },
      marcos: {
        title: 'Constellations of Marcos',
        description: `A simple project created as a tribute to my Astrology teacher, Marcos Monteiro, in which I developed a system that lists stars according to a chosen astrological coordinate.
      It is also possible to search by star name or constellation.
      For styling, I used Styled Components, following the CSS-in-JS approach.`,
      },
      games: {
        title: 'My Game Portfolio',
        description: `My portfolio of games developed over the years using Unity3D and C#.
      I used React and plain CSS for styling.`,
      },
    },
  },
  contact: {
    title: "Let's work together",
    description: 'Feel free to reach out through any of the platforms below.',
    downloadCV: "Download Resume"
  }
}