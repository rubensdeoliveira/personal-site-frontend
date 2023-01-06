import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { HeroSectionModel } from '@/infra/graphql/home/models'
import { Button } from '@/application/components'

export function HeroSection({
  button,
  description,
  devApresentation,
  devImage,
  title,
}: HeroSectionModel) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={'1.6rem'}
      mt={'2.8rem'}
    >
      <Flex flexDirection="column" maxWidth={'570px'}>
        <Text
          color={'red.500'}
          fontSize={'2rem'}
          lineHeight={'2.8rem'}
          fontWeight={500}
          mb={'1.1rem'}
        >
          {devApresentation}
        </Text>
        <Text
          fontSize={'4.4rem'}
          lineHeight={'6.4rem'}
          fontWeight={700}
          mb={'2.1rem'}
        >
          {title}
        </Text>
        <Text fontSize={'1.8rem'} lineHeight={'2.8rem'} mb={'3.1rem'}>
          {description}
        </Text>
        <Button link={button.link}>{button.label}</Button>
      </Flex>
      <Flex width={472} height={584} position="relative">
        <Image alt="Rubens Junior" src={devImage.url} fill />
      </Flex>
    </Flex>
  )
}
