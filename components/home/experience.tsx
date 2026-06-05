'use client'

import AnimatedText from '@/components/animated-text'
import { useLanguage } from '@/lib/language-context'

const Experience = () => {
  const { t } = useLanguage()

  const experienceKeys = ['hospelia', 'freelance'] as const

  return (
    <div className="md:mt-40 mt-20">
      <h2 className="text-3xl md:text-4xl text-white font-[family-name:var(--font-instrument-serif)]">
        <AnimatedText>{t.experience.heading}</AnimatedText>
      </h2>

      <div className="mt-10 space-y-8 md:space-y-12">
        {experienceKeys.map((key) => {
          const expData = t.experience.items[key]
          return (
            <div
              key={key}
              className="border-l border-white/8 pl-6 relative"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-[#ff98a2] rounded-full -translate-x-[calc(50%+0px)]" />
              <AnimatedText as="h3" className="text-lg text-white font-medium">
                {expData.title}
              </AnimatedText>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                <AnimatedText as="span" className="text-[#ff98a2]/80">
                  {expData.company}
                </AnimatedText>
                <span className="text-white/20">·</span>
                <AnimatedText as="span" className="text-white/40">
                  {expData.period}
                </AnimatedText>
              </div>
              <AnimatedText as="p" className="mt-3 text-sm text-white/50 leading-relaxed">
                {expData.description}
              </AnimatedText>
              <div className="mt-3 flex flex-wrap gap-2">
                {expData.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs text-white/30 px-2 py-1 bg-white/[0.02] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
