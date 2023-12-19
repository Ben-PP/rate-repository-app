import { View, Text, Pressable, StyleSheet } from 'react-native'
import * as Linking from 'expo-linking'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  button: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  }
})

const SingleView = ({ url }) => {
  const openGithub = () => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <Pressable name='submit' style={styles.button} onPress={openGithub}>
        <Text>Open in GitHub</Text>
      </Pressable>
    </View>
  )
}

export default SingleView
