import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function CallToActionSection() {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={'2rem'}
      mt={'14.1rem'}
      bgColor={'gray.400'}
      px={'7.8rem'}
      py={'7.6rem'}
      justifyContent={'space-between'}
      alignItems="center"
      borderRadius={'10px'}
    >
      <Text
        fontWeight={600}
        fontSize={'3.4rem'}
        lineHeight={'4.4rem'}
        maxWidth={'415px'}
      >
        Discover How Design Can Help Your Business
      </Text>
      <Button>Contact Me</Button>
    </Flex>
  )
}
