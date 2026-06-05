'use client'

import { useLanguage } from '@/lib/language-context'
import { useEffect, useRef, useState } from 'react'

interface AnimatedTextProps {
  children: string
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
}

const AnimatedText = ({
  children,
  className,
  as: Tag = 'span',
}: AnimatedTextProps) => {
  const { language } = useLanguage()
  const [displayText, setDisplayText] = useState(children)
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const prevLang = useRef(language)

  useEffect(() => {
    if (prevLang.current === language) {
      setDisplayText(children)
      return
    }
    prevLang.current = language
    setPhase('out')
    const t1 = setTimeout(() => {
      setDisplayText(children)
      setPhase('in')
    }, 180)
    const t2 = setTimeout(() => {
      setPhase('idle')
    }, 360)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [children, language])

  const style: React.CSSProperties =
    phase === 'out'
      ? {
          filter: 'blur(8px)',
          opacity: 0,
          transform: 'translateY(-4px)',
          transition:
            'filter 180ms ease, opacity 180ms ease, transform 180ms ease',
        }
      : phase === 'in'
        ? {
            filter: 'blur(8px)',
            opacity: 0,
            transform: 'translateY(4px)',
            transition: 'none',
          }
        : {
            filter: 'blur(0px)',
            opacity: 1,
            transform: 'translateY(0px)',
            transition:
              'filter 220ms ease, opacity 220ms ease, transform 220ms ease',
          }

  return (
    <Tag className={className} style={style}>
      {displayText}
    </Tag>
  )
}

export default AnimatedText
