import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { ExperienceCardModel } from '@/infra/graphql/home/models'

export function ExperienceCard({
  company,
  description,
  job,
}: ExperienceCardModel) {
  return (
    <Flex
      borderWidth={'3px'}
      borderColor={'gray.400'}
      w={'373px'}
      height={'244px'}
      flexDirection="column"
      justifyContent="center"
      p={'3.2rem'}
    >
      <Text
        color={'red.500'}
        lineHeight={'2rem'}
        textTransform="uppercase"
        mb={'1.5rem'}
      >
        {job}
      </Text>
      <Text
        textTransform="uppercase"
        fontWeight={500}
        fontSize={'2.2rem'}
        lineHeight={'2.7rem'}
        mb={'1.9rem'}
      >
        {company}
      </Text>
      <Text lineHeight={'2.8rem'}>{description}</Text>
    </Flex>
  )
}
