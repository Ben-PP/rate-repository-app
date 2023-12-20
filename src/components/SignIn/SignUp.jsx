import { View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../graphql/mutations'
import useSignIn from '../../hooks/useSignIn'
import FormikTextInput from '../common/FormikTextInput'
import Button from '../common/Button'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(5).max(30),
  password: yup.string().required('Password is required').min(5).max(50),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const SignUp = () => {
  const navigate = useNavigate()
  const { signIn } = useSignIn()
  const [mutate] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const onSubmit = async (values) => {
    const { data } = await mutate({
      variables: {
        user: {
          username: values.username,
          password: values.password
        }
      }
    })
    console.log('result: ', data)
    await signIn(values)
    navigate('/')
  }
  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <FormikTextInput
            name='confirmPassword'
            placeholder='Confirm password'
            secureTextEntry
          />
          <Button
            name='submit'
            text='Sign up'
            onPress={handleSubmit}
            width='full'
          />
        </View>
      )}
    </Formik>
  )
}

export default SignUp
