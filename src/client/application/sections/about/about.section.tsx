import { Text } from '@rubensdeoliveira-ui/react'
import ReactHtmlParser from 'react-html-parser'

import {
  AboutProps,
  FooterProps
} from '@/client/infra/graphql/landing-page/models'
import { Button, ContactIcons, Image, TitleWithTag } from '../../components'

type ExtendedAboutProps = {
  instagramLink: string
  linkedinLink: string
  whatsLink: string
}

export function About({
  description,
  photo,
  subtitle,
  title,
  instagramLink,
  linkedinLink,
  whatsLink
}: AboutProps & ExtendedAboutProps) {
  return (
    <section className="bg-mainFour h-[706px] md:h-[772px]">
      <div className="gap-[2.625rem] md:gap-6 flex-col md:flex-row flex justify-between w-full max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0 pt-0 md:pt-[6.25rem]">
        <Image
          src={photo.url}
          alt="Foto de Rubens de Oliveira"
          className="mt-[-8.6875rem] md:mt-0 self-center md:self-start w-[220px] h-[322px] sm:w-[312px] sm:h-[457px] md:w-[300px] md:h-[439px] lg:w-[400px] lg:h-[586px] xl:w-[491px] xl:h-[720px] flex-shrink-0"
        />
        <div className="max-w-[562px]">
          <TitleWithTag title={title} />
          <Text
            as="h3"
            fontSize={['28', '37', '46']}
            fontWeight={'700'}
            lineHeight={'1.2'}
            className="[&>span]:bg-mainThree"
            marginTop={['16', '24', '32']}
          >
            {ReactHtmlParser(subtitle)}
          </Text>
          <Text
            as="p"
            fontSize={['12', '14', '16']}
            fontWeight={'500'}
            lineHeight={'1.5'}
            className="text-textTwo"
            marginTop={['18', '21', '24']}
            marginBottom={['32', '37', '42']}
          >
            {ReactHtmlParser(description)}
          </Text>
          <Button
            label="Mais Sobre Mim"
            iconRight="arrowRight"
            buttonType="link"
          />
          <div className="mt-[2.625rem] md:mt-[3.5625rem] lg:mt-[4.5rem] flex flex-col md:flex-row gap-6 items-start md:items-center md:gap-[2.625rem] flex-wrap">
            <Text
              fontSize={['12', '14', '16']}
              fontWeight={'500'}
              lineHeight={'1.5'}
              className="text-textTwo"
            >
              Mantenha-se conectado comigo:
            </Text>
            <ContactIcons
              instagramLink={instagramLink}
              linkedinLink={linkedinLink}
              whatsLink={whatsLink}
              iconsSize="bigger"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
