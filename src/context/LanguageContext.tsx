'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '@/i18n'
import { Language } from '@/types/i18n'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: typeof translations.pt
  ready: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()

    if (!browserLang.startsWith('pt')) {
      setLanguage('en')
    }

    setReady(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'))
  }

  if (!ready) {
    return null
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: translations[language],
        ready
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
