import { StyleSheet, View, Image, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../../theme'
import Text from '../common/Text'
import StatItem from './StatItem'
import SingleView from './SingleView'

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

const RepositoryItem = ({ item, isSingleView = false }) => {
  const navigate = useNavigate()
  return (
    <Pressable
      onPress={() => !isSingleView && navigate(`/repository/${item.id}`)}
    >
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
        {isSingleView && <SingleView url={item.url} />}
      </View>
    </Pressable>
  )
}

export default RepositoryItem
