import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import TextInput from '../common/TextInput'

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500)
  const [sortingMethod, setSortingMethod] = useState('Latest')
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const { repositories } = useRepositories(
    orderBy,
    orderDirection,
    debouncedSearchKeyword
  )

  const getSortingMethod = (value) => {
    setSortingMethod(value)
    switch (value) {
      case 'Latest':
        setOrderBy('CREATED_AT')
        setOrderDirection('DESC')
        break
      case 'Oldest':
        setOrderBy('CREATED_AT')
        setOrderDirection('ASC')
        break
      case 'Highest rated':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('DESC')
        break
      case 'Lowest rated':
        setOrderBy('RATING_AVERAGE')
        setOrderDirection('ASC')
        break
      default:
        setOrderBy('CREATED_AT')
        setOrderDirection('DESC')
        break
    }
  }

  return (
    <View>
      <TextInput
        placeholder='Search'
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
      <Picker
        selectedValue={sortingMethod}
        onValueChange={(itemValue) => getSortingMethod(itemValue)}
      >
        <Picker.Item label='Latest' value={'Latest'} />
        <Picker.Item label='Oldest' value={'Oldest'} />
        <Picker.Item label='Highest rated' value={'Highest rated'} />
        <Picker.Item label='Lowest rated' value={'Lowest rated'} />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </View>
  )
}

export default RepositoryList
