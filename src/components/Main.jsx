import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList/RepositoryList'
import AppBar from './AppBar/AppBar'
import SignIn from './SignIn/SignIn'
import SignUp from './SignIn/SignUp'
import theme from '../theme'
import SingleRepositoryView from './RepositoryList/SingleRepositoryView'
import CreateRepositoryReview from './CreateRepositoryReview/CreateRepositoryReview'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/repository/:id' element={<SingleRepositoryView />} />
        <Route path='/review' element={<CreateRepositoryReview />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </View>
  )
}

export default Main
