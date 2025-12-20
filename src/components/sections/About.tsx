'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaUniversity,
  FaGraduationCap,
} from 'react-icons/fa'

// Data de nascimento: 31 de Agosto de 1993
const birthDate = new Date(1993, 7, 31)

function getAge(birthDate: Date) {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())

  if (!hasHadBirthdayThisYear) {
    age--
  }

  return age
}

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">

        {/* Lado esquerdo */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.about.title}
          </h2>

          {/* Avatar */}
          <div className="relative w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-800 mb-5">
            <Image
              src="/profile.png"
              alt={t.about.info.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Informações básicas */}
          <div
            className="
              flex flex-row flex-wrap justify-center gap-2
              md:flex-col md:items-start md:gap-2
              text-zinc-400 text-sm md:text-base leading-snug
            "
          >
            <div className="flex items-center gap-1.5">
              <FaUser className="text-yellow-400" />
              <span>{t.about.info.name}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaBirthdayCake className="text-yellow-400" />
              <span>
                {getAge(birthDate)} {t.about.ageLabel}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>{t.about.info.location}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaUniversity className="text-yellow-400" />
              <span>{t.about.info.university}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaGraduationCap className="text-yellow-400" />
              <span>{t.about.info.degree}</span>
            </div>
          </div>
        </div>

        {/* Lado direito — ALINHADO AO CENTRO NO DESKTOP */}
        <div className="md:w-2/3 md:flex md:items-center md:justify-center">
          <div className="text-zinc-400 text-lg leading-relaxed whitespace-pre-line">
            {t.about.description}
          </div>
        </div>

      </div>
    </div>
  )
}
