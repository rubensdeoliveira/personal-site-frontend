import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function CountNumbers() {
  return (
    <Flex flexDirection="column" gap={'0.7rem'}>
      <Text
        fontWeight={700}
        fontSize={'6rem'}
        lineHeight={'7rem'}
        textAlign="center"
      >
        80
      </Text>
      <Text
        color={'red.500'}
        fontSize={'1.8rem'}
        lineHeight={'3rem'}
        textAlign="center"
        textTransform={'uppercase'}
      >
        PROJECTS
      </Text>
    </Flex>
  )
}
