import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'

export function Menu() {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Aprenda Comigo', path: '/aprenda-comigo' },
  ]

  return (
    <Flex alignItems="center" gap={'4.6rem'}>
      {menuItems.map(menuItem => (
        <Link key={menuItem.label} href={menuItem.path}>
          <Text fontSize={'1.5rem'} lineHeight={'1.8rem'}>
            {menuItem.label}
          </Text>
        </Link>
      ))}
    </Flex>
  )
}
