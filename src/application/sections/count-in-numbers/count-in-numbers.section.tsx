import React from 'react'
import { Flex } from '@chakra-ui/react'

import { SectionHeader } from '@/application/components'
import { CountNumbers } from './components'

export function CountInNumbersSection() {
  return (
    <Flex
      alignItems="center"
      as="section"
      gap={'8.8rem'}
      mt={'11.2rem'}
      flexDirection="column"
    >
      <SectionHeader
        title="COUNT IN NUMBERS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Flex
        flexWrap={'wrap'}
        gap={'2rem'}
        width={'100%'}
        justifyContent="space-between"
      >
        <CountNumbers />
        <CountNumbers />
        <CountNumbers />
        <CountNumbers />
      </Flex>
    </Flex>
  )
}
