"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

const ContactButtons = () => {
  const { t } = useLanguage()

  return <div className='mt-4 md:mt-2 flex flex-row flex-wrap gap-2'>
    <a href="mailto:lucaszaranza@gmail.com"
      aria-label="E-mail"
      className="w-min flex flex-row items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 gap-2 rounded-full"
    >
      {t.menu.contact}
      <SiGmail size={20} />
    </a>

    <a href="https://www.linkedin.com/in/lucaszaranza/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn - abre em nova aba"
      className='rounded-full w-12 bg-[#222] flex items-center justify-center hover:bg-zinc-800'
    >
      <SiLinkedin size={20} color='#FDC700' />
    </a>

    <a href="https://github.com/lucaspzaranza"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className='rounded-full w-12 bg-[#222] flex items-center justify-center hover:bg-zinc-800'
    >
      <SiGithub size={20} color='#FDC700' />
    </a>

    <a href="https://api.whatsapp.com/send?phone=5585991753445"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Whatsapp - abre em nova aba"
      className='rounded-full w-12 bg-[#222] flex items-center justify-center hover:bg-zinc-800'
    >
      <SiWhatsapp size={20} color='#FDC700' />
    </a>
  </div>;
}


export default ContactButtons;