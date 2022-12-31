import React from 'react'

import { ButtonModel } from './models'
import { Button as ChakraButton, Text } from '@chakra-ui/react'

export function Button({ children, ...rest }: ButtonModel) {
  return (
    <ChakraButton
      {...rest}
      bgColor={'red.500'}
      borderRadius={'4px'}
      fontSize={'1.6rem'}
      w={'100%'}
      maxWidth={'177px'}
      p={'1.8rem'}
      h={'56px'}
    >
      <Text>{children}</Text>
    </ChakraButton>
  )
}
