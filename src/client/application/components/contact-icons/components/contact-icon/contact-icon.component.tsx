import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

type ContactIconsProps = {
  link: string
  iconType: 'whatsapp' | 'linkedin' | 'instagram'
  iconSize: 'default' | 'bigger'
}

export function ContactIcon({ link, iconType, iconSize }: ContactIconsProps) {
  function renderIcon() {
    switch (iconType) {
      case 'instagram':
        return <FaInstagram />
      case 'linkedin':
        return <FaLinkedin />
      case 'whatsapp':
        return <FaWhatsapp />
    }
  }

  return (
    <Link
      href={link}
      className={`${
        iconSize === 'default'
          ? 'text-[1.125rem] md:text-[1.3125rem] lg:text-[1.5rem] p-[0.625rem] md:p-[0.6875rem] lg:p-3'
          : 'text-[1.25rem] md:text-[1.625rem] lg:text-[2rem] p-[0.5rem] md:p-[0.625rem] lg:p-3'
      } flex items-center justify-center rounded-full ${
        iconType === 'instagram'
          ? 'bg-instagram'
          : iconType === 'linkedin'
          ? 'bg-linkedin'
          : 'bg-whatsapp'
      }`}
    >
      {renderIcon()}
    </Link>
  )
}
