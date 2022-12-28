import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function ExperienceCard() {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.400'}
      w="100%"
      maxWidth={'373px'}
      height={'244px'}
      flexDirection="column"
      justifyContent="center"
      p={'3.2rem'}
    >
      <Text
        color={'red.500'}
        lineHeight={'2rem'}
        textTransform="uppercase"
        mb={'1.5rem'}
      >
        2014 - 2015 (WEB DESIGNER)
      </Text>
      <Text
        textTransform="uppercase"
        fontWeight={500}
        fontSize={'2.2rem'}
        lineHeight={'2.7rem'}
        mb={'1.9rem'}
      >
        FOX MEDIA INC.
      </Text>
      <Text lineHeight={'2.8rem'}>
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
        pulvinar dapibus leo.
      </Text>
    </Flex>
  )
}
