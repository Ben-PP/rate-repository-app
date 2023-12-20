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
export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      forksCount
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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
