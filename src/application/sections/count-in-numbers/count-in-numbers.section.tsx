import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'

import { CountNumbers } from './components'
import { CountInNumbersSectionModel } from '@/infra/graphql/home/models'
import { SectionInfo } from '@/application/components'

export function CountInNumbersSection({
  sectionHeader,
  countItems,
}: CountInNumbersSectionModel) {
  const renderCountNumbers = useMemo(
    () =>
      countItems.map(countItem => (
        <CountNumbers key={countItem.id} {...countItem} />
      )),
    [countItems],
  )

  return (
    <Flex
      alignItems="center"
      as="section"
      gap={'8.8rem'}
      mt={'11.2rem'}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex
        flexWrap={'wrap'}
        gap={'2rem'}
        width={'100%'}
        justifyContent="space-between"
      >
        {renderCountNumbers}
      </Flex>
    </Flex>
  )
}
