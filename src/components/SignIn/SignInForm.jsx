import { Pressable, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import theme from '../../theme'
import Text from '../Text'
import FormikTextInput from '../FormikTextInput'

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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <Pressable name='submit' style={styles.button} onPress={handleSubmit}>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

export default SignInForm
