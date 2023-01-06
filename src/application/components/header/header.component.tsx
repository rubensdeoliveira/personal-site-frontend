import { useSidebar } from '@/application/hooks'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { Menu } from './components'

export function Header() {
  const { onOpen } = useSidebar()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      py={'4.1rem'}
    >
      <Flex align="center">
        {isMobile && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize={'2.4rem'}
            variant="unstyled"
            onClick={onOpen}
            mr={'0.8rem'}
          />
        )}
        Rubens
      </Flex>
      <Menu />
    </Flex>
  )
}
