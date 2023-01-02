import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { ContactCardModel } from '@/infra/graphql/home/models'
import { getContactIcon } from './constants'

export function ContactCard({ contactText, contactType }: ContactCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.500'}
      w="100%"
      maxWidth={'373px'}
      height={'166px'}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={'3.3rem'}
      borderRadius={'10px'}
    >
      <Flex
        bgColor={'red.500'}
        borderRadius={'50%'}
        w={'50px'}
        h={'50px'}
        alignItems="center"
        justifyContent="center"
        mb={'2.4rem'}
        flexShrink={0}
      >
        <Icon as={getContactIcon(contactType)} w={'3rem'} h={'3rem'} />
      </Flex>
      <Text fontSize={'1.8rem'} lineHeight={'2.2rem'} textAlign="center">
        {contactText}
      </Text>
    </Flex>
  )
}
