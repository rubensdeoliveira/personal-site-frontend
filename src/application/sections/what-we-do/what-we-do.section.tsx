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
      gap={'6rem'}
      mt={'14.6rem'}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'}>
        {renderWhatWeDoCards}
      </Flex>
    </Flex>
  )
}
