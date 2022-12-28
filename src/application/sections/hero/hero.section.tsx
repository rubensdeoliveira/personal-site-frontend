import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export function HeroSection() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={'1.6rem'}
      mt={'5rem'}
    >
      <Flex flexDirection="column" maxWidth={'570px'}>
        <Text>Hi, I’m John Andrew</Text>
        <Text>Front End and Mobile App Developer</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit mattis.{' '}
        </Text>
        <Button>Contact Me</Button>
      </Flex>
      <Flex width={472} height={584} position="relative">
        <Image
          alt="José Rubens"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          fill
        />
      </Flex>
    </Flex>
  )
}
