import { Text } from '@rubensdeoliveira-ui/react'
import { HighlightNumber } from '@/client/infra/graphql/landing-page/models'

export function HighlightNumber({ description, number }: HighlightNumber) {
  return (
    <div className="flex flex-col">
      <Text
        as="h2"
        fontSize={['24', '33', '42']}
        fontWeight={'700'}
        lineHeight={'1.2'}
        className="font-quicksand text-mainFour"
        marginBottom={['4', '8', '12']}
      >
        {number}
      </Text>
      <Text
        as="p"
        fontSize={['12', '14', '16']}
        fontWeight={'500'}
        lineHeight={'1.2'}
        className="font-quicksand text-mainFour"
      >
        {description}
      </Text>
    </div>
  )
}
