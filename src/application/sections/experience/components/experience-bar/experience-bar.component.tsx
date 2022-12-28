import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function ExperienceBar() {
  return (
    <Flex w="100%" maxWidth={'571px'} flexDirection="column" gap={'1.2rem'}>
      <Text lineHeight={'3rem'} fontSize={'1.8rem'}>
        Figma
      </Text>
      <Box w={'100%'} h={'20px'} bgColor={'gray.500'}>
        <Box w={'80%'} h={'100%'} bgColor={'red.500'} />
      </Box>
    </Flex>
  )
}
