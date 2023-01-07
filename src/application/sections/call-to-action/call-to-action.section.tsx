import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { CallToActionSectionModel } from '@/infra/graphql/home/models'
import { Button } from '@/application/components'

export function CallToActionSection({
  title,
  button,
}: CallToActionSectionModel) {
  return (
    <Flex
      flexWrap={'wrap'}
      gap={'2rem'}
      bgColor={'gray.400'}
      px={'7.8rem'}
      py={'7.6rem'}
      justifyContent={'space-between'}
      alignItems="center"
      borderRadius={'10px'}
      as="section"
    >
      <Text
        fontWeight={600}
        fontSize={'3.4rem'}
        lineHeight={'4.4rem'}
        maxWidth={'415px'}
      >
        {title}
      </Text>
      <Button link={button.link}>{button.label}</Button>
    </Flex>
  )
}
