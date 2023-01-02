import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { ExperienceBarModel } from '@/infra/graphql/home/models'

export function ExperienceBar({
  experienceLevel,
  language,
}: ExperienceBarModel) {
  return (
    <Flex w="100%" maxWidth={'571px'} flexDirection="column" gap={'1.2rem'}>
      <Text lineHeight={'3rem'} fontSize={'1.8rem'}>
        {language}
      </Text>
      <Box w={'100%'} h={'20px'} bgColor={'gray.500'}>
        <Box w={`${experienceLevel * 20}%`} h={'100%'} bgColor={'red.500'} />
      </Box>
    </Flex>
  )
}
