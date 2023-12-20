import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import { loadErrorMessages } from '@apollo/client/dev'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import { AuthStorageProvider } from './src/contexts/AuthStorageContext'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)
loadErrorMessages()

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageProvider value={authStorage}>
            <Main />
          </AuthStorageProvider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  )
}

export default App
