import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Text from './Text'

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text color='primary' fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </Pressable>
  )
}

export default AppBarTab
