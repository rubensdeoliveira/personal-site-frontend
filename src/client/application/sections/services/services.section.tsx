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
    <section className="flex flex-col w-full pt-[4.5rem] pb-[4.5rem] min-[1113px]:pt-[12.375rem] min-[1113px]:pb-[9.375rem] max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0">
      <div className="flex max-w-[562px] m-[0_auto] mb-[2.5rem] md:m-0 md:mb-[4.5rem] items-start gap-[1.125rem] md:gap-6 flex-col md:items-center md:flex-row md:max-w-[1098px] justify-between">
        <div className="flex flex-col max-w-[562px] md:max-w-[463px]">
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
          className="text-textTwo max-w-[562px] md:max-w-[486px]"
        >
          {description}
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-x-[0.375rem] lg:grid-cols-3 gap-y-4 sm:gap-x-4 sm:gap-y-4 md:gap-x-5 md:gap-y-5 lg:gap-x-6 lg:gap-y-6">
        {serviceCards.map((serviceCard) => (
          <ServiceCard key={serviceCard.id} {...serviceCard} />
        ))}
      </div>
    </section>
  )
}
