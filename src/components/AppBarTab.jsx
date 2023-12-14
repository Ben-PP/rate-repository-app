import { Link } from 'react-router-native'
import Text from './Text'

const AppBarTab = ({ text, route }) => {
  return (
    <Link to={route}>
      <Text color='primary' fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </Link>
  )
}

export default AppBarTab
