import { Flex, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

import { LayoutModel } from './models'

export function Layout({ children }: LayoutModel) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex
      flexDirection="column"
      w="100%"
      maxWidth={'1160px'}
      mx="auto"
      px={isMobile ? '3rem' : 0}
    >
      {children}
    </Flex>
  )
}
