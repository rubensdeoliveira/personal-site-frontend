import { FooterProps } from '@/client/infra/graphql/landing-page/models'
import { FooterContactIcon, FooterContactItem } from './components'
import { Text } from '@rubensdeoliveira-ui/react'
import { ContactIcons } from '../../components'

export function Footer({
  copyrightName,
  copyrightText,
  description,
  email,
  instagramLink,
  linkedinLink,
  phone,
  whatsLink
}: FooterProps) {
  return (
    <footer>
      <div className="bg-mainFour">
        <div className="flex flex-col sm:flex-row justify-between w-full max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0 pt-[2.625rem] pb-[3.125rem] md:pt-[3.5rem] md:pb-[5.2rem] lg:pt-[4.5rem] lg:pb-[6.25rem]">
          <div>
            <Text>logo</Text>
            <Text
              as="p"
              fontSize={['12', '14', '16']}
              fontWeight={'400'}
              lineHeight={'1.5'}
              className="font-quicksand text-textThree max-w-[384px]"
              marginTop={['24', '28', '32']}
              marginBottom={['32', '37', '42']}
            >
              {description}
            </Text>
            <ContactIcons
              instagramLink={instagramLink}
              linkedinLink={linkedinLink}
              whatsLink={whatsLink}
              iconsSize="default"
            />
          </div>
          <div>
            <Text
              as="h3"
              fontSize={['20', '24', '28']}
              fontWeight={'600'}
              lineHeight={'1.2'}
              className="font-quicksand"
              marginBottom={['24', '28', '32']}
              marginTop={['42', '0', '0']}
            >
              Contato
            </Text>
            <div className="flex flex-col gap-5 md:gap-[1.375rem] lg:gap-6">
              <FooterContactItem contact={email} contactType="email" />
              <FooterContactItem contact={phone} contactType="phone" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-mainTwo">
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0 py-6 justify-between items-center">
          <Text
            as="p"
            fontSize={['18', '21', '24']}
            fontWeight={'700'}
            lineHeight={'1.2'}
            className="font-quicksand text-mainFour"
          >
            {copyrightName}
          </Text>
          <Text
            fontSize={['12', '15', '18']}
            fontWeight={'500'}
            lineHeight={'1.2'}
            className="font-quicksand text-mainFour"
          >
            {copyrightText}
          </Text>
        </div>
      </div>
    </footer>
  )
}
