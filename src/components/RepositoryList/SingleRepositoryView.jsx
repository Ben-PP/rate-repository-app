import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../../graphql/queries'
import RepositoryItem from './RepositoryItem'

const SingleRepositoryView = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.log(error)
    }
  })
  if (loading || !data) return null
  const item = data.repository
  return (
    <FlatList
      ListHeaderComponent={<RepositoryItem item={item} isSingleView={true} />}
    />
  )
}

export default SingleRepositoryView
