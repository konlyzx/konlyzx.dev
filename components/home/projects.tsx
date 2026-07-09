'use client'

import ProjectItem from './project'
import AnimatedText from '@/components/animated-text'
import BetterFlow from '@/components/svg/better-flow'
import NewShields from '@/components/svg/new-shields'
import Revelo from '@/components/svg/revelo'
import { useLanguage } from '@/lib/language-context'
import { Project } from '@/lib/type'

const projectData: Omit<Project, 'description'>[] = [
  {
    title: 'Revelo',
    url: 'https://revelo.konlyzx.dev/',
    category: 'website',
    icon: Revelo,
    translationKey: 'revelo',
    tags: ['TanStack Start', 'Supabase', 'TypeScript'],
    isBeta: true,
  },
  {
    title: 'Better Flow',
    url: 'https://betterflow.site/',
    category: 'website',
    icon: BetterFlow,
    translationKey: 'better-flow',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/betterspacx/website',
  },
  {
    title: 'New Shields',
    url: 'https://newshields.vercel.app/',
    category: 'website',
    icon: NewShields,
    translationKey: 'new-shields',
    tags: ['SvelteKit', 'Hono', 'TypeScript'],
    isBeta: true,
    githubUrl: 'https://github.com/konlyzx/newshields',
  },
]

const Projects = () => {
  const { t } = useLanguage()

  return (
    <div className="md:mt-40 mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <h2 className="text-3xl md:text-4xl text-white font-[family-name:var(--font-instrument-serif)]">
          <AnimatedText>{t.projects.heading}</AnimatedText>
        </h2>
        <AnimatedText as="span" className="text-xs text-white/30 uppercase tracking-widest">
          {t.projects.subheading}
        </AnimatedText>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px border border-white/8 rounded-xl overflow-hidden">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            index={index + 1}
            {...project}
            description={
              t.projects.items[
                project.translationKey as keyof typeof t.projects.items
              ]
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
