import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { first: 30 }
  })

  const fetchRepositories = async () => {
    if (data) {
      setRepositories(data.repositories)
    }
    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [loading])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
