import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiPhoneIncoming } from 'react-icons/fi'

type FooterContactIconProps = {
  link: string
  iconType: 'whatsapp' | 'linkedin' | 'instagram'
}

export function FooterContactIcon({ link, iconType }: FooterContactIconProps) {
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
      className={`flex items-center justify-center p-[0.625rem] md:p-[0.6875rem] lg:p-3 rounded-full text-[1.125rem] md:text-[1.3125rem] lg:text-[1.5rem] ${
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
