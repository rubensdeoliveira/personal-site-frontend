import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function TestimonialCard() {
  return (
    <Flex
      w="100%"
      maxWidth={'373px'}
      height={'467px'}
      flexDirection="column"
      justifyContent="center"
      p={'3.4rem'}
      bgColor={'gray.400'}
      borderRadius={'10px'}
    >
      <Text lineHeight={'2.8rem'} fontSize={'1.7rem'} textAlign="center">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
        tellus, luc tus nec ullamcorper mattis, pulvinar dapibus leo.
      </Text>
      <Text
        lineHeight={'3rem'}
        fontSize={'1.8rem'}
        fontWeight={500}
        textAlign="center"
      >
        Michael Andrew
      </Text>
      <Text lineHeight={'2.8rem'} fontWeight={300} textAlign="center">
        CEO Media
      </Text>
    </Flex>
  )
}
