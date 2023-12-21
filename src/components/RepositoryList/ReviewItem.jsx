import { View, Alert, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useApolloClient, useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../../graphql/mutations'
import Text from '../common/Text'
import theme from '../../theme'
import Button from '../common/Button'

const ratignSize = 60
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  column: {
    flexShrink: 1,
    flexDirection: 'column'
  },
  row: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rating: {
    color: 'white',
    backgroundColor: theme.colors.secondary,
    width: ratignSize,
    height: ratignSize,
    borderRadius: ratignSize / 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10
  },
  body: {
    paddingTop: 10
  }
})

const ReviewItem = ({ item, showActions = false }) => {
  const navigate = useNavigate()
  const date = new Date(item.createdAt)
  const formattedDay = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
  const formattedMonth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
  const title = item.user
    ? item.user.username
    : item.repository.fullName
    ? item.repository.fullName
    : 'Unknown'

  const apolloClient = useApolloClient()
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    variables: { id: item.id },
    onError: (error) => {
      console.log('error: ', error)
    },
    onCompleted: () => {
      console.log('Review deleted')
    }
  })

  const handleViewRepository = () => {
    navigate(`/repository/${item.repository.id}`)
  }

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            await deleteReview()
            await apolloClient.resetStore()
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text fontSize='heading' style={styles.rating}>
          {item.rating}
        </Text>
        <View style={styles.column}>
          <Text fontSize='subheading' fontWeight='bold'>
            {title}
          </Text>
          <Text color='tertiary'>{`${formattedDay}.${formattedMonth}.${date.getFullYear()}`}</Text>
          <Text style={styles.body}>{item.text}</Text>
        </View>
      </View>
      {showActions && (
        <View style={styles.row}>
          <Button text='View repository' onPress={handleViewRepository} />
          <Button
            text='Delete review'
            textColor='white'
            color='red'
            onPress={handleDeleteReview}
          />
        </View>
      )}
    </View>
  )
}

export default ReviewItem
