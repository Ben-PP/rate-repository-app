import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary
  }
  // ...
})

const onPress = () => {
  console.log('onPress')
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' onPress={onPress} />
    </View>
  )
}

export default AppBar
