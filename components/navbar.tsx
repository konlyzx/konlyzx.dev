'use client'

import LanguageSwitcher from '@/components/language-switcher'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="mt-10 flex items-center justify-between">
      <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide">
        konlyzx.dev
      </Link>
      <LanguageSwitcher />
    </nav>
  )
}

export default Navbar
