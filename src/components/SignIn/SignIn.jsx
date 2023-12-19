import { useQuery } from '@apollo/client'
import { StyleSheet, Pressable, Text, View } from 'react-native'

import SignInForm from './SignInForm'
import useSignIn from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-native'
import { GET_AUTHENTICATED_USER } from '../../graphql/queries'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  button: {
    width: '50%',
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  }
})

const SignIn = () => {
  const { signIn, signOut } = useSignIn()
  const navigate = useNavigate()

  const { loading, data } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const onSubmit = async (values) => {
    try {
      await signIn(values)
      navigate('/')
    } catch (e) {
      console.log('Error signing in: ', e)
    }
  }
  if (!loading && data.me) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={signOut}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
    )
  }
  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
