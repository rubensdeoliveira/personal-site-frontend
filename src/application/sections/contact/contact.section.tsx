import React from 'react'
import { Flex } from '@chakra-ui/react'

import { ContactSectionModel } from '@/infra/graphql/home/models'
import { ContactCard } from './components'

export function ContactSection({ contactCard }: ContactSectionModel) {
  return (
    <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'9.2rem'}>
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </Flex>
  )
}
