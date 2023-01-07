import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'

import { SectionInfo } from '@/application/components'
import { WhatWeDoSectionModel } from '@/infra/graphql/home/models'
import { WhatWeDoCard } from './components'

export function WhatWeDoSection({
  sectionHeader,
  whatWeDoCards,
}: WhatWeDoSectionModel) {
  const renderWhatWeDoCards = useMemo(
    () =>
      whatWeDoCards.map(whatWeDoCard => (
        <WhatWeDoCard key={whatWeDoCard.id} {...whatWeDoCard} />
      )),
    [whatWeDoCards],
  )

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={['3rem', '3rem', '3rem', '6rem', '6rem', '6rem']}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex
        flexWrap={'wrap'}
        gap={['1.6rem', '1.6rem', '1.6rem', '2.05rem', '2.05rem', '2.05rem']}
        w={'100%'}
        justifyContent="center"
      >
        {renderWhatWeDoCards}
      </Flex>
    </Flex>
  )
}
