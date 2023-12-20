import { View, StyleSheet } from 'react-native'
import Text from '../common/Text'
import theme from '../../theme'

const ratignSize = 60
const styles = StyleSheet.create({
  column: {
    flexShrink: 1,
    flexDirection: 'column'
  },
  row: {
    padding: 10,
    backgroundColor: 'white',
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

const ReviewItem = ({ item }) => {
  const date = new Date(item.createdAt)
  const formattedDay = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
  const formattedMonth =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()

  return (
    <View style={styles.row}>
      <Text fontSize='heading' style={styles.rating}>
        {item.rating}
      </Text>
      <View style={styles.column}>
        <Text fontSize='subheading' fontWeight='bold'>
          {item.user.username}
        </Text>
        <Text color='tertiary'>{`${formattedDay}.${formattedMonth}.${date.getFullYear()}`}</Text>
        <Text style={styles.body}>{item.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
