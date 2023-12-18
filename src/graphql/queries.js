import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query ($first: Int) {
    repositories(first: $first) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`
export const GET_AUTHENTICATED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`
