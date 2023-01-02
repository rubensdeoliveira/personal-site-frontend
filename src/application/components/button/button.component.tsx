import React from 'react'
import { Button as ChakraButton, Link, Text } from '@chakra-ui/react'

import { ButtonModel } from './models'

export function Button({ children, link, ...rest }: ButtonModel) {
  return (
    <Link href={link}>
      <ChakraButton
        {...rest}
        bgColor={'red.500'}
        borderRadius={'4px'}
        fontSize={'1.6rem'}
        w={'100%'}
        maxWidth={'177px'}
        p={'1.8rem'}
        h={'56px'}
        _hover={{ bgColor: 'red.500.lighten' }}
      >
        <Text>{children}</Text>
      </ChakraButton>
    </Link>
  )
}
