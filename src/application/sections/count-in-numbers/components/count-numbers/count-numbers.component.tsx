import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { CountItemModel } from '@/infra/graphql/home/models'

export function CountNumbers({ countNumber, countText }: CountItemModel) {
  return (
    <Flex flexDirection="column" gap={'0.7rem'}>
      <Text
        fontWeight={700}
        fontSize={'6rem'}
        lineHeight={'7rem'}
        textAlign="center"
      >
        {countNumber}
      </Text>
      <Text
        color={'red.500'}
        fontSize={'1.8rem'}
        lineHeight={'3rem'}
        textAlign="center"
        textTransform={'uppercase'}
      >
        {countText}
      </Text>
    </Flex>
  )
}
