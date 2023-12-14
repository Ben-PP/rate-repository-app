import { Formik } from 'formik'
import * as yup from 'yup'
import SignInForm from './SignInForm'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('signing in with values: ', values)
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
