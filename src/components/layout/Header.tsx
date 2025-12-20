'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { t, toggleLanguage, language } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur border-b border-zinc-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo / Nome */}
          <span className="font-bold">Lucas Zaranza</span>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home">{t.menu.home}</a>
            <a href="#about">{t.menu.about}</a>
            <a href="#projects">{t.menu.projects}</a>
            <a href="#contact">{t.menu.contact}</a>

            <button
              onClick={toggleLanguage}
              className="text-sm border border-zinc-700 px-2 py-1 rounded"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Language button (always visible on mobile) */}
            <button
              onClick={toggleLanguage}
              className="text-sm border border-zinc-700 px-2 py-1 rounded"
              aria-label="Trocar idioma"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="text-xl"
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu (only navigation) */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-zinc-800 pt-4">
            <a href="#home" onClick={() => setOpen(false)}>
              {t.menu.home}
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              {t.menu.about}
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              {t.menu.projects}
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              {t.menu.contact}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
