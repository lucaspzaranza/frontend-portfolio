export const pt = {
  menu: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
  },
  home: {
    title: 'Olá, eu sou o Lucas Zaranza.',
    subtitle: 'Desenvolvedor Fullstack especialista em Frontend.',
    downloadCv: 'Baixar CV',
  },
  about: {
    title: 'Sobre Mim',
    skillsTitle: "Principais Habilidades",
    description:
      `
        Sou desenvolvedor Frontend com mais de 10 anos de experiência. Comecei na indústria de games com Unity3D e C#, e levei dessa época o gosto por interfaces interativas, performance e atenção aos detalhes de experiência do usuário.

        Hoje meu foco é construir interfaces web robustas e bem estruturadas com:

        Frontend: React, Next.js, TypeScript e Angular
        Visualização de dados: D3.js e SVG
        Integração: APIs REST e familiaridade com .NET e bancos de dados relacionais

        Projeto em destaque: Zazastro (zazastro.com.br), uma aplicação web de astrologia que desenvolvi do zero. No frontend, ela inclui renderização de mapas astrais interativos em SVG com D3.js, arquitetura de rotas com Next.js App Router (mapas compartilháveis por link), gerenciamento de estado complexo entre múltiplos tipos de mapa, interface responsiva para desktop e mobile e internacionalização em vários idiomas.

        Tenho experiência sólida em equipes ágeis, contribuindo para entregas contínuas, componentização, código escalável e boas práticas.

        Movido por aprendizado contínuo e por transformar complexidade em interfaces simples, úteis e bem construídas.

        Muito prazer, e sempre aberto a novas conexões.
      `,
    ageLabel: 'anos',
    info: {
      name: 'Lucas Zaranza',
      location: 'Fortaleza, CE | São Paulo, SP - Brasil',
      university: 'UECE - Universidade Estadual do Ceará',
      degree: 'Ciência da Computação (2011 - 2017)',
    },
  },
  projects: {
    title: 'Projetos',
    backToGrid: 'Voltar para projetos',
    items: {
      calendarWidget: {
        title: 'Widget de Calendário para Desktop',
        description: `Me aventurei em desenvolver um Widget de um Calendário pra Desktop para Windows. 
        Ele fica fixado no seu Desktop, se conecta com o Google Calendar, e você pode visualizar, criar ou editar seus compromissos, que vai sincronizar tudinho com o Google Calendar. Criei uma interface moderna inspirada no design de Glassmorphism.`
      },
      astroCourse: {
        title: 'Landing Page para Curso de Astrologia',
        description: 'Landing Page para um curso de Astrologia ministrado por mim.',
      },
      portfolio: {
        title: 'Meu Portfólio Frontend',
        description: 'Meu portfólio pessoal desenvolvido com React, Next.js, TypeScript e Tailwind CSS.',
      },
      zazastro: {
        title: 'Zazastro - Site de Astrologia',
        description: `
        Aplicação web de astrologia que projetei e desenvolvi sozinho, do zero, com foco forte em frontend.

        - Renderização de mapas astrais interativos em SVG com D3.js: zodiaco, aspectos, dignidades, partes árabes e estrelas fixas, com tooltips e interação por toque no mobile.
        - Arquitetura de rotas com Next.js App Router, com estado do mapa codificado na URL para permitir compartilhar mapas por link.
        - Gerenciamento de estado complexo entre múltiplos tipos de mapa (natal, trânsitos, revoluções, sinastria, progressões, profecções).
        - Interface responsiva para desktop e mobile, internacionalização com next-intl e configurações do usuário persistidas.
        - Backend em Node.js/Express para os cálculos astronômicos, consumido pelo frontend via API REST.
        `,
      },
      botbot: {
        title: 'Dashboard para Robôs',
        description: `Dashboard web para gerenciamento de robôs, onde podemos monitorar suas informações, visualizar suas coordenadas, e enviar comandos.
          Integrado com IA para respostas inteligentes através de um chat, acoplado com câmeras com visualização no frontend.
          Desenvolvido com TypeScript, React, Tailwind CSS, e a biblioteca ROSLIB para comunicação de envio e recebimento de mensagens e dados do robô.`,
      },
      elisa: {
        title: 'Landing Page Elisa Ferraz',
        description: `Projeto freelance em que desenvolvi uma Landing Page para a advogada Elisa Ferraz.
        Utilizei React, TypeScript e Tailwind CSS para criar uma interface moderna e responsiva que destaca os serviços jurídicos oferecidos.`,
      },
      digicard: {
        title: 'Jogo de Cartas Digimon',
        description: `Jogo de cartas digital multiplayer baseado no universo Digimon, onde os jogadores podem batalhar com cartas virtuais.
        Desenvolvido com Angular no front e .NET com C# no backend utilizando SignalR para comunicação entre os jogadores, com foco em uma experiência de usuário envolvente e interativa. A estilização foi feita com componentes do Material UI.
        Dica: para testar na mesma máquina, abra uma janela normal e outra em modo anônimo.`,
      },
      oldPortfolio: {
        title: 'Meu Portfólio Antigo',
        description: `Meu portfólio antigo, desenvolvido com React e TypeScript.
        Utilizei Styled Components para a estilização do projeto.`,
      },
      marcos: {
        title: 'Constellations of Marcos',
        description: `Um projeto simples, feito em homenagem ao meu professor de Astrologia Marcos Monteiro, em que desenvolvi um sistema que lista as estrelas de acordo com a coordenada astrológica desejada. É possível também realizar uma busca pelo nome ou constelação desejada.
        Para estilização eu utilizei Styled Components, o CSS-In-JS.`
      },
      games: {
        title: 'Meu Portfólio de Games',
        description: `Meu portfólio de jogos desenvolvidos com Unity3D e C# ao longo dos anos.
        Utilizei React, e CSS puro para estilização.`
      }
    }
  },
  contact: {
    title: 'Vamos trabalhar juntos',
    description: 'Sinta-se à vontade para entrar em contato através de qualquer uma das plataformas abaixo.',
    downloadCV: "Baixar Currículo"
  }
}