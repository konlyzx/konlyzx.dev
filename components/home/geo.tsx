'use client'

import Earth from './earth'
import AnimatedText from '@/components/animated-text'
import UTC8Clock from '@/components/utc-8-clock'
import { useLanguage } from '@/lib/language-context'
import { MapPin } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

const Geo = () => {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col md:mt-28 md:flex-row md:space-x-16 justify-center items-center py-32 md:py-40">
      <Earth />
      <div className="max-w-[420px] text-center md:text-start mt-10 md:mt-0">
        <div className="flex items-center gap-1.5 justify-center md:justify-start mb-3">
          <MapPin className="size-3 text-[#ff98a2]/60" />
          <AnimatedText as="span" className="text-xs text-[#ff98a2]/60 uppercase tracking-widest">
            {t.geo.label}
          </AnimatedText>
        </div>
        <AnimatedText as="p" className="text-2xl md:text-3xl text-white font-[family-name:var(--font-instrument-serif)]">
          {t.geo.city}
        </AnimatedText>
        <Balancer>
          <AnimatedText as="p" className="mt-4 text-sm text-white/50 leading-relaxed">
            {t.geo.text}
          </AnimatedText>
        </Balancer>
        <UTC8Clock className="mt-6" />
      </div>
    </div>
  )
}

export default Geo
