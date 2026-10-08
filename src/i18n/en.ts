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
        I’m a Frontend Developer with over 11 years of experience. I started in the game industry with Unity3D and C#, and I carried over a passion for interactive interfaces, performance, and attention to user experience details.

        Today my focus is building robust, well-structured web interfaces with:

        Frontend: React, Next.js, TypeScript, and Angular
        Data visualization: D3.js and SVG
        Integration: REST APIs, plus familiarity with .NET and relational databases

        Featured project: Zazastro (zazastro.com.br), a web application for astrology that I built from scratch. On the frontend, it features interactive astrological charts rendered in SVG with D3.js, a Next.js App Router architecture (charts shareable via URL), complex state management across multiple chart types, a responsive desktop/mobile UI, and multilingual support.

        I have strong experience working in Agile teams, contributing to continuous delivery, component-driven development, scalable code, and best practices.

        Driven by continuous learning, I enjoy turning complexity into simple, useful, and well-crafted interfaces.

        Nice to meet you, and always open to new connections.
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
      calendarWidget: {
        title: 'Desktop Calendar Widget',
        description: `I ventured into developing a Desktop Calendar Widget for Windows.
        It stays pinned to your Desktop, connects to Google Calendar, and you can view, create, or edit your appointments, which will sync everything with Google Calendar. I created a modern interface inspired by Glassmorphism design.`
      },
      astroCourse: {
        title: 'Landing Page for Astrology Course',
        description: 'Landing Page for an Astrology Course taught by me.',
      },
      portfolio: {
        title: 'My Frontend Portfolio',
        description:
          'My personal portfolio developed with React, Next.js, TypeScript, and Tailwind CSS.',
      },
      zazastro: {
        title: 'Zazastro – Astrology Website',
        description: `
        Astrology web application I designed and built from scratch, with a strong frontend focus.

        - Interactive astrological charts rendered in SVG with D3.js: zodiac wheel, aspects, dignities, Arabic parts, and fixed stars, with tooltips and touch interaction on mobile.
        - Next.js App Router architecture with chart state encoded in the URL, so charts can be shared via link.
        - Complex state management across multiple chart types (natal, transits, returns, synastry, progressions, profections).
        - Responsive desktop/mobile UI, internationalization with next-intl, and persisted user settings.
        - Node.js/Express backend for astronomical calculations, consumed by the frontend through a REST API.
      `,
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