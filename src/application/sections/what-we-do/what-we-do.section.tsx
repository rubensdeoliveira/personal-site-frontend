import { SectionHeader } from '@/application/components'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { WhatWeDoCard } from './components'

export function WhatWeDoSection() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={'6rem'}
      mt={'14.6rem'}
      flexDirection="column"
    >
      <SectionHeader
        title="WHAT WE DO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'}>
        <WhatWeDoCard />
        <WhatWeDoCard />
        <WhatWeDoCard />
        <WhatWeDoCard />
        <WhatWeDoCard />
        <WhatWeDoCard />
      </Flex>
    </Flex>
  )
}
