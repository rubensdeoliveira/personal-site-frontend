import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { SectionInfoModel } from './models'

export function SectionInfo({ title, description }: SectionInfoModel) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w={'100%'}
      flexDirection="column"
      gap={'2.2rem'}
    >
      <Text
        fontWeight={600}
        fontSize={'3.4rem'}
        lineHeight={'4.4rem'}
        mb="0.2rem"
        textTransform={'uppercase'}
        textAlign="center"
      >
        {title}
      </Text>
      <Box width={'100px'} height={'2px'} bgColor="red.500" />
      <Text lineHeight={'2.8rem'} maxWidth={'570px'} textAlign="center">
        {description}
      </Text>
    </Flex>
  )
}
