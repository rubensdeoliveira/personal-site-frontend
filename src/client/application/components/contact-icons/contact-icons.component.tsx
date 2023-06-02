import { ContactIcon } from './components'

type ContactIconsProps = {
  whatsLink: string
  instagramLink: string
  linkedinLink: string
  iconsSize: 'default' | 'bigger'
}

export function ContactIcons({
  whatsLink,
  instagramLink,
  linkedinLink,
  iconsSize
}: ContactIconsProps) {
  return (
    <div className="flex items-center gap-3 md:gap-[1.125rem] lg:gap-6">
      <ContactIcon
        iconType={'whatsapp'}
        link={whatsLink}
        iconSize={iconsSize}
      />
      <ContactIcon
        iconType={'instagram'}
        link={instagramLink}
        iconSize={iconsSize}
      />
      <ContactIcon
        iconType={'linkedin'}
        link={linkedinLink}
        iconSize={iconsSize}
      />
    </div>
  )
}
