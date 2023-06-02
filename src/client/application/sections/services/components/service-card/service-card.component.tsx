import { Text } from '@rubensdeoliveira-ui/react'

import { ServiceCardProps } from '@/client/infra/graphql/landing-page/models'
import { Fa500Px, FaAccessibleIcon, FaAccusoft } from 'react-icons/fa'

export function ServiceCard({ description, icon, title }: ServiceCardProps) {
  function renderIcon() {
    switch (icon) {
      case '1':
        return <FaAccusoft />
      case '2':
        return <Fa500Px />
      case '3':
        return <FaAccessibleIcon />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-[285px] sm:max-w-[384px] flex flex-col items-start py-[2.625rem] px-6 md:px-7 lg:px-8 bg-mainFour hover:bg-mainFive hover:border-t-mainTwo hover:border-t-4">
      <div className="flex items-center justify-center p-4 md:p-[1.125rem] lg:p-5 bg-mainTwo text-mainOne text-[2.625rem] md:text-[2.875rem] lg:text-[3.125rem]">
        {renderIcon()}
      </div>
      <Text
        as="h4"
        fontSize={['20', '24', '28']}
        fontWeight={'700'}
        lineHeight={'1.2'}
        className="font-quicksand"
        marginTop={['32', '37', '42']}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontSize={['12', '14', '16']}
        fontWeight={'500'}
        lineHeight={'1.5'}
        className="font-quicksand"
        marginTop={'16'}
      >
        {description}
      </Text>
    </div>
  )
}
