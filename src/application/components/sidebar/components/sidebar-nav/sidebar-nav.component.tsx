import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { SidebarNavModel } from './models'

export function SidebarNav({ menuItems }: SidebarNavModel) {
  const { asPath } = useRouter()

  const handlePostMenuItems = useMemo(
    () =>
      menuItems.map(menuItem => (
        <Box key={menuItem.slug}>
          <Text
            fontWeight="bold"
            color="red.500"
            fontSize={'1.2rem'}
            letterSpacing={'0.06rem'}
          >
            {menuItem.name.toUpperCase()}
          </Text>
          {menuItem.posts.length > 0 && (
            <Stack spacing={'0.8rem'} mt={'1.6rem'} align="stretch">
              {menuItem.posts.map(post => {
                const isSelected = asPath.includes(post.slug)
                return (
                  <Box
                    key={post.topic}
                    borderRadius={'8px'}
                    bgColor={isSelected ? 'gray.500' : undefined}
                    px={'1.2rem'}
                  >
                    <Link
                      href={`/aprenda-comigo/${post.slug}`}
                      display="flex"
                      alignItems="center"
                    >
                      <Text
                        fontWeight={isSelected ? 600 : 500}
                        fontSize={'1.4rem'}
                        lineHeight={'3rem'}
                      >
                        {post.topic}
                      </Text>
                    </Link>
                  </Box>
                )
              })}
            </Stack>
          )}
        </Box>
      )),
    [menuItems],
  )

  return (
    <Stack spacing={'3.2rem'} align="flex-start">
      {handlePostMenuItems}
    </Stack>
  )
}
