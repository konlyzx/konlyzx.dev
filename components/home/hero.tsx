'use client'

import AnimatedText from '@/components/animated-text'
import Github from '@/components/svg/github'
import X from '@/components/svg/x'
import { useLanguage } from '@/lib/language-context'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <div className="mt-20 md:mt-32">
      <div className="flex items-center gap-2 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff98a2] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff98a2]" />
        </span>
        <AnimatedText as="span" className="text-xs text-[#ff98a2] tracking-widest uppercase">
          {t.hero.available}
        </AnimatedText>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl text-white leading-tight font-[family-name:var(--font-instrument-serif)]">
            <AnimatedText>{t.hero.greeting}</AnimatedText>
          </h1>

          <div className="mt-3">
            <AnimatedText as="span" className="text-sm text-[#ff98a2]/70 tracking-wide uppercase">
              {t.hero.role}
            </AnimatedText>
          </div>

          <div className="mt-8 max-w-[520px] text-sm md:text-base leading-relaxed text-white/60">
            <AnimatedText as="p">{t.hero.bio}</AnimatedText>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              href="mailto:konlyzx@palmaxlabs.site"
              className="flex items-center gap-2 px-5 py-2 border border-[#ff98a2]/40 text-[#ff98a2] text-sm rounded-full hover:bg-[#ff98a2]/10 transition-colors duration-300"
            >
              <AnimatedText as="span">{t.hero.cta}</AnimatedText>
              <ArrowUpRight className="size-3.5" />
            </Link>

            <div className="flex gap-5 items-center">
              <Link
                href="https://x.com/konlyzx_"
                target="_blank"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 duration-300 group text-sm"
              >
                <X className="grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
                Twitter
              </Link>
              <Link
                href="https://github.com/konlyzx"
                target="_blank"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 duration-300 group text-sm"
              >
                <Github className="grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/assets/avatarme.jpeg"
            alt="Konlyzx"
            width={600}
            height={600}
            className="rounded-2xl h-44 w-44 md:h-56 md:w-56 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
