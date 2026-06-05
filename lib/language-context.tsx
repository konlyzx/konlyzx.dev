'use client'

import { translations, Language } from '@/lib/translations'
import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations['en'],
})

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
