import { FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import ItemSeparator from '../common/ItemSeparator'

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={(props) => <RepositoryItem {...props} />}
    />
  )
}

export default RepositoryListContainer
