import { gql } from 'graphql-request'

export const getPostsQuery = gql`
  query {
    posts {
      data {
        attributes {
          topic
          slug
          content
        }
      }
    }
  }
`
