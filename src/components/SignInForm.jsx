import { Pressable, View, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },
  button: {
    width: '50%',
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  }
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
