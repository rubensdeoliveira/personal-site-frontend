import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { getWhatWeDoIcon } from './constants'
import { WhatWeDoCardModel } from '@/infra/graphql/home/models'

export function WhatWeDoCard({
  description,
  title,
  iconType,
  link,
  linkText,
}: WhatWeDoCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.400'}
      w={'373px'}
      h={'346px'}
      p={'3.2rem'}
      flexDirection="column"
      borderRadius={'10px'}
    >
      <Flex
        bgColor={'red.500'}
        borderRadius={'50%'}
        w={'60px'}
        h={'60px'}
        alignItems="center"
        justifyContent="center"
        mb={'4.1rem'}
        flexShrink={0}
      >
        <Icon as={getWhatWeDoIcon(iconType)} w={'3rem'} h={'3rem'} />
      </Flex>
      <Text
        mb={'1.6rem'}
        fontWeight={500}
        fontSize={'2.3rem'}
        lineHeight={'3rem'}
      >
        {title}
      </Text>
      <Text lineHeight={'2.8rem'}>{description}</Text>
      <Link
        display={'flex'}
        alignItems="center"
        marginTop={'auto'}
        gap={'0.8rem'}
        href={link}
      >
        <Text fontWeight={500} lineHeight={'2.8rem'}>
          {linkText}
        </Text>
        <Icon as={FiArrowRight} w={'2.4rem'} h={'2.4rem'} />
      </Link>
    </Flex>
  )
}
