'use client'

import { useLanguage } from '@/lib/language-context'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative inline-flex items-center rounded-full p-0.5">
      <div
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
          language === 'en' ? 'left-0.5' : 'left-1/2'
        }`}
      />
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 flex items-center justify-center px-3 py-1 rounded-full text-xs transition-colors duration-200 cursor-pointer ${
          language === 'en' ? 'text-black' : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`relative z-10 flex items-center justify-center px-3 py-1 rounded-full text-xs transition-colors duration-200 cursor-pointer ${
          language === 'es' ? 'text-black' : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageSwitcher
