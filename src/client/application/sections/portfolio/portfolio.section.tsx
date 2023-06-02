import { Text } from '@rubensdeoliveira-ui/react'
import ReactHtmlParser from 'react-html-parser'

import { PortfolioProps } from '@/client/infra/graphql/landing-page/models'
import { PortfolioCard } from './components'
import { TitleWithTag } from '../../components'

export function Portfolio({
  description,
  portfolioCards,
  subtitle,
  title
}: PortfolioProps) {
  return (
    <section className="flex flex-col items-center w-full pb-[4.5rem] md:pb-[6.9375rem] lg:pb-[9.375rem] max-w-[1200px] m-[0_auto] px-4 md:px-8 xl:px-0">
      <TitleWithTag title={title} />
      <Text
        as="h3"
        fontSize={['28', '37', '46']}
        fontWeight={'700'}
        lineHeight={'1.2'}
        className="[&>span]:bg-mainThree text-center"
        marginTop={['16', '24', '32']}
      >
        {ReactHtmlParser(subtitle)}
      </Text>
      <Text
        as="p"
        fontSize={['12', '14', '16']}
        fontWeight={'500'}
        lineHeight={'1.5'}
        className="text-textTwo text-center max-w-[586px]"
        marginTop={['4', '14', '24']}
        marginBottom={['32', '52', '72']}
      >
        {description}
      </Text>
      <div className="flex items-center gap-4 md:gap-5 lg:gap-6 flex-wrap justify-center">
        {portfolioCards.map((portfolioCard) => (
          <PortfolioCard key={portfolioCard.id} {...portfolioCard} />
        ))}
      </div>
    </section>
  )
}
