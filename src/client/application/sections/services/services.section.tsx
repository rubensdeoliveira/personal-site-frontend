import { Text } from '@rubensdeoliveira-ui/react'
import ReactHtmlParser from 'react-html-parser'

import { ServicesProps } from '@/client/infra/graphql/landing-page/models'
import { ServiceCard } from './components'
import { TitleWithTag } from '../../components'

export function Services({
  description,
  serviceCards,
  subtitle,
  title
}: ServicesProps) {
  return (
    <section className="flex flex-col w-full pt-[12.375rem] pb-[9.375rem] max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0">
      <div className="flex gap-[1.125rem] md:gap-6 flex-col items-center md:flex-row max-w-[1098px] justify-between mb-[4.5rem]">
        <div className="flex flex-col max-w-[463px]">
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
        </div>
        <Text
          as="p"
          fontSize={['12', '14', '16']}
          fontWeight={'500'}
          lineHeight={'1.5'}
          className="text-textTwo max-w-[486px]"
        >
          {description}
        </Text>
      </div>
      <div className="flex items-center gap-4 md:gap-5 lg:gap-6 flex-wrap justify-center">
        {serviceCards.map((serviceCard) => (
          <ServiceCard key={serviceCard.id} {...serviceCard} />
        ))}
      </div>
    </section>
  )
}
