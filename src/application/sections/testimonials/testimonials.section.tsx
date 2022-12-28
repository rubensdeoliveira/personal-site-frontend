import { SectionHeader } from '@/application/components'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { TestimonialCard } from './components'

export function TestimonialsSection() {
  return (
    <Flex
      alignItems="center"
      as="section"
      gap={'4.9rem'}
      mt={'14.7rem'}
      flexDirection="column"
    >
      <SectionHeader
        title="TESTIMONIALS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'1.3rem'}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Flex>
    </Flex>
  )
}
