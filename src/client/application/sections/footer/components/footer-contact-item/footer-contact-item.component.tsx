import { Text } from '@rubensdeoliveira-ui/react'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FiMail, FiPhoneIncoming } from 'react-icons/fi'

type FooterContactItemProps = {
  contact: string
  contactType: 'email' | 'phone'
}

export function FooterContactItem({
  contact,
  contactType
}: FooterContactItemProps) {
  function renderIcon() {
    if (contactType === 'email') {
      return (
        <FaEnvelope className="text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] text-textFour" />
      )
    }
    return (
      <FaPhoneAlt className="text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] text-textFour" />
    )
  }

  return (
    <Link
      href={contactType === 'email' ? `mailto:${contact}` : `tel:${contact}`}
      className="flex items-center gap-4"
    >
      {renderIcon()}
      <Text
        fontSize={['12', '14', '16']}
        fontWeight={'400'}
        lineHeight={'1.5'}
        className="text-textThree font-quicksand"
      >
        {contact}
      </Text>
    </Link>
  )
}
