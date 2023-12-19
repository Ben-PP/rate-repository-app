import { StyleSheet, View, Image } from 'react-native'
import theme from '../../theme'
import Text from '../Text'
import StatItem from '../StatItem'

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  card: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    flexGrow: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  bioDetails: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 20
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },
  tagItem: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 5,
    width: 100,
    textAlign: 'center',
    borderRadius: 5
  }
})

const RepositoryItem = ({ props }) => {
  const item = props.item

  return (
    <View testID='repositoryItem' style={styles.card}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.bioDetails}>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {item.fullName}
          </Text>
          <Text>{item.description}</Text>
          <Text style={styles.tagItem}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsRow}>
        <StatItem label='Stars' number={item.stargazersCount} />
        <StatItem label='Forks' number={item.forksCount} />
        <StatItem label='Reviews' number={item.reviewCount} />
        <StatItem label='Rating' number={item.ratingAverage} />
      </View>
    </View>
  )
}

export default RepositoryItem
