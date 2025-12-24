'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '@/i18n'
import { Language } from '@/types/i18n'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase()

    if (!browserLanguage.startsWith('pt')) {
      setLanguage('en')
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
