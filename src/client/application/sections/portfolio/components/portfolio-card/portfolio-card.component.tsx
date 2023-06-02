import { Text } from '@rubensdeoliveira-ui/react'

import { PortfolioCardProps } from '@/client/infra/graphql/landing-page/models'
import { Fa500Px, FaAccessibleIcon, FaAccusoft } from 'react-icons/fa'
import { Image } from '@/client/application/components'

export function PortfolioCard({
  image,
  shortDescription,
  title
}: PortfolioCardProps) {
  return (
    <div className="w-full max-w-[343px] sm:max-w-[588px] flex flex-col items-start">
      <Image
        alt={`Imagem do portfólio - Projeto ${title}`}
        src={image.url}
        className="w-full h-[262px] sm:h-[450px]"
      />
      <Text
        as="h4"
        fontSize={['16', '22', '28']}
        fontWeight={'700'}
        lineHeight={'1.2'}
        className="font-quicksand"
        marginTop={['16', '24', '32']}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontSize={['12', '14', '16']}
        fontWeight={'500'}
        lineHeight={'1.5'}
        className="font-quicksand"
        marginTop={['12', '14', '16']}
        marginBottom={['20', '26', '32']}
      >
        {shortDescription}
      </Text>
    </div>
  )
}
