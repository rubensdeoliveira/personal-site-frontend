import { Text } from '@rubensdeoliveira-ui/react'
import { FaTag } from 'react-icons/fa'

type TitleWithTagProps = {
  title: string
  className?: string
}

export function TitleWithTag({ title, className }: TitleWithTagProps) {
  return (
    <div
      className={`${className} flex items-center text-mainTwo gap-2 md:gap-3 lg:gap-4`}
    >
      <FaTag className="text-[1.125rem] md:text-[1.4375rem] lg:text-[1.75rem]" />
      <Text
        fontSize={['14', '17', '20']}
        fontWeight={'500'}
        lineHeight={'1.2'}
        as="h2"
      >
        {title}
      </Text>
    </div>
  )
}
