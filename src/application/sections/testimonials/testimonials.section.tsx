import { SectionInfo } from '@/application/components'
import { TestimonialsSectionModel } from '@/infra/graphql/home/models'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { TestimonialCard } from './components'

export function TestimonialsSection({
  sectionHeader,
}: TestimonialsSectionModel) {
  return (
    <Flex
      alignItems="center"
      as="section"
      gap={'4.9rem'}
      mt={'14.7rem'}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'1.3rem'}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Flex>
    </Flex>
  )
}
