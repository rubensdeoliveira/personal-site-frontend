import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ContactCard } from './components'

export function ContactSection() {
  return (
    <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'9.2rem'}>
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </Flex>
  )
}
