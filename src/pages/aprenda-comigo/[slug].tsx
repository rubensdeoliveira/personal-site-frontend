import { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/infra/graphql/common/client'
import { normalizeData } from '@/application/helpers'
import {
  getPostByTopicNameQuery,
  getPostsQuery,
} from '@/infra/graphql/posts/queries'
import { Post, PostQueryModel } from '@/infra/graphql/posts/models'
import { getCategoriesQuery } from '@/infra/graphql/categories/queries'
import { Category } from '@/infra/graphql/categories/models'
import { Flex } from '@chakra-ui/react'
import { Sidebar } from '@/application/components/sidebar'
import { Header } from '@/application/components'
import { MarkdownViewer } from '@/application/components/markdown-viewer'

type LearnWithMeBySlugProps = {
  post: Post
  categories: Category[]
}

export default function LearnWithMeBySlug({
  post,
  categories,
}: LearnWithMeBySlugProps) {
  return (
    <>
      <Header />
      <Flex w="100%" mt={'2.8rem'}>
        <Sidebar menuItems={categories} />
        <MarkdownViewer content={post.content} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.request(getPostsQuery)
  const normalizedResponse = normalizeData(response.posts.data)

  const paths = normalizedResponse.map(postItem => ({
    params: { slug: postItem.slug },
  }))

  return {
    fallback: 'blocking',
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postResponse = await client.request(
    getPostByTopicNameQuery(params.slug as string),
  )
  const normalizedResponse = normalizeData(postResponse) as PostQueryModel
  if (normalizedResponse.posts.length === 0) {
    return {
      redirect: { destination: '/aprenda-comigo', permanent: false },
    }
  }
  const categoriesResponse = await client.request(getCategoriesQuery)
  return {
    props: {
      post: normalizedResponse.posts[0],
      categories: normalizeData(categoriesResponse.categories.data),
    },
    revalidate: 60 * 10,
  }
}
