import { SectionHeader } from '@/application/components'
import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { ExperienceBar, ExperienceCard } from './components'

export function ExperienceSection() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={'5.8rem'}
      mt={'14.6rem'}
      flexDirection="column"
    >
      <SectionHeader
        title="EXPERIENCE & SKILLS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'1.3rem'}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </Flex>
      <Grid
        gridTemplateColumns={'1fr 1fr'}
        w={'100%'}
        columnGap={'1.8rem'}
        rowGap={'3.1rem'}
      >
        <ExperienceBar />
        <ExperienceBar />
        <ExperienceBar />
        <ExperienceBar />
        <ExperienceBar />
        <ExperienceBar />
      </Grid>
    </Flex>
  )
}
