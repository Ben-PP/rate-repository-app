import { FlatList, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_AUTHENTICATED_USER } from '../../graphql/queries'
import Text from '../common/Text'
import ReviewItem from '../RepositoryList/ReviewItem'
import ItemSeparator from '../common/ItemSeparator'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

const UserReviews = () => {
  const { data, loading } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
    onError: (error) => {
      console.log('error: ', error)
    }
  })
  if (loading) {
    return <Text>Loading...</Text>
  }
  const reviews = data.me.reviews
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

  return (
    <FlatList
      style={styles.container}
      ItemSeparatorComponent={() => <ItemSeparator />}
      data={reviewNodes}
      keyExtractor={({ id }) => id}
      renderItem={(props) => <ReviewItem {...props} showActions={true} />}
    />
  )
}

export default UserReviews
