import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { FooterModel } from '@/infra/graphql/home/models'

export function FooterSection({ title }: FooterModel) {
  return (
    <Flex
      bgColor={'gray.900'}
      as="footer"
      w={'100%'}
      px={'3rem'}
      pt={'11.4rem'}
      pb={'15.6rem'}
      justifyContent="center"
      alignItems="center"
      flexDirection={'column'}
    >
      <Text fontSize={'2rem'} lineHeight={'3rem'} fontWeight={500}>
        {title}
      </Text>
      <Text lineHeight={'2.8rem'} fontWeight={500}>
        Victoria Street No 1, London
      </Text>
      <Flex gap={'2.7rem'}>
        <Flex
          bgColor={'gray.400'}
          borderRadius={'50%'}
          w={'46px'}
          h={'46px'}
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Icon as={FiPhone} w={'2.4rem'} h={'2.4rem'} />
        </Flex>
        <Flex
          bgColor={'gray.400'}
          borderRadius={'50%'}
          w={'46px'}
          h={'46px'}
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Icon as={FiPhone} w={'2.4rem'} h={'2.4rem'} />
        </Flex>
      </Flex>
    </Flex>
  )
}
