import { View, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import Text from '../common/Text'
import { GET_AUTHENTICATED_USER } from '../../graphql/queries'

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
  const { data, loading } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.log('error: ', error)
    }
  })
  if (loading) {
    return <Text>Loading...</Text>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Repository Rater 9000</Text>
      <View style={styles.tabRow}>
        <AppBarTab text='Repositories' route='/' />
        {data.me && <AppBarTab text='Create a review' route='review' />}
        <AppBarTab text={data.me ? 'Sign out' : 'Sign in'} route='signin' />
        {!data.me && <AppBarTab text='Sign up' route='signup' />}
      </View>
    </View>
  )
}

export default AppBar
