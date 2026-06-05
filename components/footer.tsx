'use client'

import { useLanguage } from '@/lib/language-context'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <div className="border-t border-white/8 mt-20 py-10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
      <p>
        &copy; {currentYear} {t.footer.copy}
      </p>
      <p>{t.footer.tagline}</p>
    </div>
  )
}

export default Footer
