import { TestimonialCardModel } from '@/infra/graphql/home/models'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export function TestimonialCard({
  description,
  job,
  name,
  photo,
}: TestimonialCardModel) {
  return (
    <Flex
      w={'373px'}
      h={'467px'}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={'3.4rem'}
      bgColor={'gray.400'}
      borderRadius={'10px'}
    >
      <Image src={'/imgs/quote.svg'} alt="Quote" width={60} height={44} />
      <Text
        lineHeight={'2.8rem'}
        fontSize={'1.7rem'}
        textAlign="center"
        mt={'2.9rem'}
      >
        {description}
      </Text>
      <Avatar
        name={name}
        src={photo?.url}
        w={'90px'}
        h={'90px'}
        mt={'2.1rem'}
        size="2xl"
      />
      <Text
        lineHeight={'3rem'}
        fontSize={'1.8rem'}
        fontWeight={500}
        textAlign="center"
        mt="1.7rem"
      >
        {name}
      </Text>
      <Text lineHeight={'2.8rem'} fontWeight={300} textAlign="center">
        {job}
      </Text>
    </Flex>
  )
}
