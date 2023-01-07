import { Flex } from '@chakra-ui/react'
import React from 'react'

import { LayoutModel } from './models'

export function Layout({ children }: LayoutModel) {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      maxWidth={'1160px'}
      mx="auto"
      px={['16px', '16px', '24px', '24px', '24px', '0']}
    >
      {children}
    </Flex>
  )
}
