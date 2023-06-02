import { Text } from '@rubensdeoliveira-ui/react'
import ReactHtmlParser from 'react-html-parser'

import { Button, TitleWithTag, Image } from '../../components'
import { HeroProps } from '@/client/infra/graphql/landing-page/models'
import { HighlightNumber } from './components'

export function Hero({
  description,
  highlightNumbers,
  mainButton,
  photo,
  secondaryButton,
  sectionTitle,
  title
}: HeroProps) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start sm:items-center xl:items-start md:flex-row justify-between max-w-[1200px] m-[0_auto] mt-[1.875rem] w-full px-4 md:px-8 xl:px-0 gap-[2.625rem] md:gap-6">
        <div className="items-start sm:items-center md:items-start flex flex-col w-full max-w-[592px] mt-3 md:mt-0 xl:mt-12">
          <TitleWithTag title={sectionTitle} className="self-start" />
          <Text
            as="h1"
            fontSize={['36', '50', '64']}
            fontWeight={'700'}
            lineHeight={'1.3'}
            marginTop={'24'}
            className="[&>span]:bg-mainThree"
          >
            {ReactHtmlParser(title)}
          </Text>
          <Text
            as="p"
            fontSize={['12', '14', '16']}
            fontWeight={'500'}
            lineHeight={'1.5'}
            marginTop={['18', '17', '16']}
            marginBottom={['32', '37', '42']}
            className="text-textTwo w-full max-w-[586px]"
          >
            {description}
          </Text>
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <Button label={mainButton.label} />
            <Button
              label={secondaryButton.label}
              buttonType="link"
              iconLeft="download"
            />
          </div>
        </div>
        <Image
          src={photo.url}
          alt={'Foto de Rubens de Oliveira'}
          className="w-[220px] h-[322px] sm:w-[312px] sm:h-[457px] md:w-[300px] md:h-[439px] lg:w-[400px] lg:h-[586px] xl:w-[491px] xl:h-[720px] flex-shrink-0"
        />
      </div>
      <div className="bg-mainTwo mt-[-2.625rem] md:mt-[2rem] xl:mt-[-6.9375rem]">
        <div className="flex justify-start sm:justify-center xl:justify-start max-w-[1200px] m-[0_auto] w-full gap-6 md:gap-12 lg:gap-[4.5rem] pt-[4.125rem] pb-6 md:pt-8 md:pb-8 px-4 md:px-8 xl:px-0">
          {highlightNumbers.map((highlightNumber) => (
            <HighlightNumber key={highlightNumber.id} {...highlightNumber} />
          ))}
        </div>
      </div>
    </section>
  )
}
