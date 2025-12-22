'use client'

import clsx from 'clsx'
import { useLanguage } from '@/context/LanguageContext'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'

type ContactButtonsProps = {
  variant?: 'compact' | 'default'
  align?: 'start' | 'center'
}

const ContactButtons = ({
  variant = 'default',
  align = 'center',
}: ContactButtonsProps) => {
  const { t } = useLanguage()

  const isCompact = variant === 'compact'

  const iconSize = isCompact ? 20 : 28
  const emailPadding = isCompact ? 'py-2 px-4 text-sm' : 'py-2 px-6 text-base'
  const circleSize = 'w-12 h-12'

  return (
    <div
      className={clsx(
        'flex flex-row flex-wrap gap-2',
        align === 'center' ? 'justify-center' : 'justify-start'
      )}
    >
      {/* Email */}
      <a
        href="mailto:lucaszaranza@gmail.com"
        aria-label="E-mail"
        className={clsx(
          'flex items-center gap-2 rounded-full font-bold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors',
          emailPadding
        )}
      >
        {t.menu.contact}
        <SiGmail size={iconSize} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/lucaszaranza/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn - abre em nova aba"
        className={clsx(
          'rounded-full bg-[#222] flex items-center justify-center hover:bg-zinc-800 transition-colors',
          circleSize
        )}
      >
        <SiLinkedin size={iconSize} color="#FDC700" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/lucaspzaranza"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={clsx(
          'rounded-full bg-[#222] flex items-center justify-center hover:bg-zinc-800 transition-colors',
          circleSize
        )}
      >
        <SiGithub size={iconSize} color="#FDC700" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=5585991753445"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp - abre em nova aba"
        className={clsx(
          'rounded-full bg-[#222] flex items-center justify-center hover:bg-zinc-800 transition-colors',
          circleSize
        )}
      >
        <SiWhatsapp size={iconSize} color="#FDC700" />
      </a>
    </div>
  )
}

export default ContactButtons
