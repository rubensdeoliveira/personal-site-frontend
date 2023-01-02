import React, { useMemo } from 'react'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

import { FooterSectionModel } from '@/infra/graphql/home/models'
import { getFooterIcon } from './constants'

export function FooterSection({
  title,
  footerInfoIconLinks,
  footerInfoTextLinks,
}: FooterSectionModel) {
  const renderInfoTextLinks = useMemo(
    () =>
      footerInfoTextLinks.map(footerInfoTextLink => (
        <Link key={footerInfoTextLink.id} href={footerInfoTextLink.link}>
          <Text lineHeight={'2.8rem'} fontWeight={500}>
            {footerInfoTextLink.text}
          </Text>
        </Link>
      )),
    [footerInfoTextLinks],
  )

  const renderInfoIconLinks = useMemo(
    () =>
      footerInfoIconLinks.map(footerInfoIconLink => (
        <Link key={footerInfoIconLink.id} href={footerInfoIconLink.link}>
          <Flex
            bgColor={'gray.400'}
            borderRadius={'50%'}
            w={'46px'}
            h={'46px'}
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Icon
              as={getFooterIcon(footerInfoIconLink.iconType)}
              w={'2.4rem'}
              h={'2.4rem'}
            />
          </Flex>
        </Link>
      )),
    [footerInfoIconLinks],
  )

  return (
    <Flex
      bgColor={'gray.900'}
      as="footer"
      w={'100%'}
      px={'3rem'}
      pt={'11.4rem'}
      pb={'15.6rem'}
      justifyContent="center"
      alignItems="center"
      flexDirection={'column'}
    >
      <Text
        fontSize={'2rem'}
        lineHeight={'3rem'}
        fontWeight={500}
        mb={'2.9rem'}
      >
        {title}
      </Text>
      <Flex flexDirection="column" gap={'1.5rem'}>
        {renderInfoTextLinks}
      </Flex>
      <Flex gap={'2.7rem'} mt={'5.8rem'}>
        {renderInfoIconLinks}
      </Flex>
    </Flex>
  )
}
