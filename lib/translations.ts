export const translations = {
  en: {
    nav: {
      home: 'Home',
    },
    hero: {
      available: 'Available for work',
      greeting: 'Hey, I\'m Konlyzx 👋',
      role: 'Full Stack Web Developer',
      bio: 'I build things for the web — focused on clean interfaces, smooth interactions, and scalable backends. From Cali, Colombia, working on projects that mix good design with solid engineering.',
      cta: 'Contact',
    },
    experience: {
      heading: 'Experience',
      items: {
        hospelia: {
          title: 'Full Stack Developer',
          company: 'Hospelia',
          period: 'Currently',
          description: 'Developing web applications with Next.js and TypeScript. Technical leadership on large-scale projects. Implementation of scalable architectures and performance optimization.',
          technologies: ['Next.js', 'TypeScript', 'React', 'JavaScript', 'GraphQL'],
        },
        freelance: {
          title: 'Frontend Developer',
          company: 'Freelance',
          period: 'August 2024',
          description: 'Development of web applications. Implementation of RESTful and GraphQL APIs. Database optimization and performance improvement.',
          technologies: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'TypeScript'],
        },
      },
    },
    projects: {
      heading: 'Work',
      subheading: 'Things I\'ve built',
      items: {
        'better-flow':
          'An open-source screenshot studio that runs entirely in your browser. No server uploads, no telemetry — just your images, transformed.',
        'new-shields':
          'A beautiful badges generator for your GitHub READMEs. Built with SvelteKit & Hono.',
      },
    },
    geo: {
      label: 'From',
      city: 'Cali, Colombia',
      text: "This is where I'm from — come say hi if you're around.",
    },
    footer: {
      copy: 'Konlyzx',
      tagline: 'Designed & built by me.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
    },
    hero: {
      available: 'Disponible para trabajar',
      greeting: 'Hola, soy Konlyzx 👋',
      role: 'Desarrollador Full Stack Web',
      bio: 'Construyo cosas para la web — enfocado en interfaces limpias, interacciones fluidas y backends escalables. De Cali, Colombia, trabajando en proyectos que mezclan buen diseño con ingeniería sólida.',
      cta: 'Contacto',
    },
    experience: {
      heading: 'Experiencia',
      items: {
        hospelia: {
          title: 'Desarrollador Full Stack',
          company: 'Hospelia',
          period: 'Actualmente',
          description: 'Desarrollo de aplicaciones web con Next.js y TypeScript. Liderazgo técnico en proyectos de gran escala. Implementación de arquitecturas escalables y optimización de rendimiento.',
          technologies: ['Next.js', 'TypeScript', 'React', 'JavaScript', 'GraphQL'],
        },
        freelance: {
          title: 'Desarrollador Frontend',
          company: 'Freelance',
          period: 'Agosto 2024',
          description: 'Desarrollo de aplicaciones web. Implementación de APIs RESTful y GraphQL. Optimización de bases de datos y mejora de rendimiento.',
          technologies: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'TypeScript'],
        },
      },
    },
    projects: {
      heading: 'Trabajo',
      subheading: 'Cosas que he construido',
      items: {
        'better-flow':
          'Un estudio de capturas de pantalla de código abierto que funciona completamente en tu navegador. Sin cargas al servidor, sin telemetría — solo tus imágenes, transformadas.',
        'new-shields':
          'Un generador de badges hermosos para tus READMEs de GitHub. Construido con SvelteKit y Hono.',
      },
    },
    geo: {
      label: 'De',
      city: 'Cali, Colombia',
      text: 'Aquí es donde soy — si estás por la zona, ¡saluda!',
    },
    footer: {
      copy: 'Konlyzx',
      tagline: 'Diseñado y construido por mí.',
    },
  },
} as const

export type Language = keyof typeof translations
export type Translations = (typeof translations)[Language]
