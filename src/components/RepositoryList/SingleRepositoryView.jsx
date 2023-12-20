import { FlatList, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../../graphql/queries'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'
import ItemSeparator from '../common/ItemSeparator'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

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
  const repository = data.repository
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <RepositoryItem item={repository} isSingleView={true} />
          <ItemSeparator />
        </>
      }
      ItemSeparatorComponent={() => <ItemSeparator />}
      data={reviewNodes}
      keyExtractor={({ id }) => id}
      renderItem={(props) => <ReviewItem {...props} />}
    />
  )
}

export default SingleRepositoryView
