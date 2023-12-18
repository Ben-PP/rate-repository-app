import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const [mutate, result] = useMutation(AUTHENTICATE, {
    onError: (error) => {
      throw new Error(error)
    }
  })
  const signOut = async () => {
    console.log('signing out')
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  const signIn = async ({ username, password }) => {
    console.log('signing in')
    const { data } = await mutate({
      variables: { credentials: { username, password } }
    })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
  }

  return { signIn, signOut, result }
}

export default useSignIn
