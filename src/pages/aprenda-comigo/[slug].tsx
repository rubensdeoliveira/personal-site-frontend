import { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/infra/graphql/common/client'
import { normalizeData } from '@/application/helpers'
import {
  getPostByTopicNameQuery,
  getPostsQuery,
} from '@/infra/graphql/posts/queries'
import { Post } from '@/infra/graphql/posts/models'
import { getCategoriesQuery } from '@/infra/graphql/categories/queries'
import { Category } from '@/infra/graphql/categories/models'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { Sidebar } from '@/application/components/sidebar'
import { Header, Layout } from '@/application/components'
import { MarkdownViewer } from '@/application/components/markdown-viewer'
import { useMemo } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type LearnWithMeBySlugProps = {
  post: Post
  categories: Category[]
}

export default function LearnWithMeBySlug({
  post,
  categories,
}: LearnWithMeBySlugProps) {
  const previousPost = useMemo((): Post | undefined => {
    const postCategory = categories.find(
      category => category.name === post.category.name,
    )
    if (postCategory) {
      const postIndexInCategory = postCategory.posts.findIndex(
        p => p.slug === post.slug,
      )
      if (postIndexInCategory > 0) {
        return postCategory.posts[postIndexInCategory - 1]
      } else {
        const postCategoryIndex = categories.findIndex(
          c => c.slug === postCategory.slug,
        )
        if (postCategoryIndex > 0) {
          const categoryPosts = categories[postCategoryIndex - 1].posts
          return categoryPosts[categoryPosts.length - 1]
        }
      }
    }
  }, [post, categories])

  const nextPost = useMemo((): Post | undefined => {
    const postCategory = categories.find(
      category => category.name === post.category.name,
    )
    if (postCategory) {
      const postIndexInCategory = postCategory.posts.findIndex(
        p => p.slug === post.slug,
      )
      if (postIndexInCategory < postCategory.posts.length - 1) {
        return postCategory.posts[postIndexInCategory + 1]
      } else {
        const postCategoryIndex = categories.findIndex(
          c => c.slug === postCategory.slug,
        )
        if (postCategoryIndex < categories.length - 1) {
          return categories[postCategoryIndex + 1].posts[0]
        }
      }
    }
  }, [post, categories])

  return (
    <Layout>
      <Header />
      <Flex w="100%" mt={['3.2rem', '3.2rem', '3.2rem', '0', '0', '0']}>
        <Sidebar menuItems={categories} />
        <Flex flexDirection="column" flex={1}>
          <MarkdownViewer content={post.content} />
          <Flex width={'100%'} gap={'1.6rem'} mt={'6.4rem'} flexWrap="wrap">
            {previousPost && (
              <Link
                href={`/aprenda-comigo/${previousPost.slug}`}
                fontSize={'1.8rem'}
                fontWeight={700}
                lineHeight={1.5}
                color={'red.500'}
                display="flex"
                alignItems={'center'}
                gap={'0.4rem'}
              >
                <Icon as={FiChevronLeft} w={'2rem'} h={'2rem'} />
                <Text>{previousPost.topic}</Text>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/aprenda-comigo/${nextPost.slug}`}
                marginLeft={'auto'}
                fontSize={'1.8rem'}
                fontWeight={700}
                lineHeight={1.5}
                color={'red.500'}
                display="flex"
                alignItems={'center'}
                gap={'0.4rem'}
              >
                <Text>{nextPost.topic}</Text>
                <Icon as={FiChevronRight} w={'2rem'} h={'2rem'} />
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.request(getPostsQuery)
  const normalizedResponse = normalizeData(response.posts.data)

  const paths = normalizedResponse.map((postItem: Post) => ({
    params: { slug: postItem.slug },
  }))

  return {
    fallback: 'blocking',
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsResponse = await client.request(getPostsQuery)
  const postsBySlugResponse = await client.request(
    getPostByTopicNameQuery(params.slug as string),
  )
  const { posts } = normalizeData(postsResponse)
  const { posts: postsBySlug } = normalizeData(postsBySlugResponse)
  if (postsBySlug.length === 0) {
    if (posts.length > 0) {
      return {
        redirect: {
          destination: `/aprenda-comigo/${posts[0].slug}`,
          permanent: false,
        },
      }
    } else {
      return {
        redirect: { destination: '/', permanent: false },
      }
    }
  }
  const categoriesResponse = await client.request(getCategoriesQuery)
  return {
    props: {
      post: postsBySlug[0],
      categories: normalizeData(categoriesResponse.categories.data),
    },
    revalidate: 60 * 10,
  }
}
