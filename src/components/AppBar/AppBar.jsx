import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import Text from '../common/Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'center'
  },
  tabRow: {
    backgroundColor: theme.colors.primary,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  textTitle: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Repository Rater 9000</Text>
      <View style={styles.tabRow}>
        <AppBarTab text='Repositories' route='/' />
        <AppBarTab text='Sign in' route='signin' />
      </View>
    </View>
  )
}

export default AppBar
