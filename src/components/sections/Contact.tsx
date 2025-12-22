'use client'

import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ContactButtons'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-[30vh] flex flex-col items-center justify-center gap-6 text-center mb-2">
      <h2 className="text-3xl md:text-4xl font-bold">
        {t.contact?.title ?? 'Let’s work together'}
      </h2>

      <p className="text-zinc-400">
        {t.contact?.description ??
          'Feel free to reach out through any of the platforms below.'}
      </p>

      <ContactButtons />
    </div>
  )
}

export default Contact
