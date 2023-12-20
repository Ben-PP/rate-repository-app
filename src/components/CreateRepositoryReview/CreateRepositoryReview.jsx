import { View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../../graphql/mutations'
import FormikTextInput from '../common/FormikTextInput'
import Button from '../common/Button'

const styles = StyleSheet.create({
  container: {}
})

const validationSchema = yup.object().shape({
  repositoryOwner: yup.string().required('Repository owner is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100'),
  review: yup.string()
})

const CreateRepositoryReview = () => {
  const navigate = useNavigate()
  const [mutate] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      console.log('error: ', error)
    }
  })

  const onSubmit = async (values) => {
    console.log(values)
    const { data } = await mutate({
      variables: {
        review: {
          repositoryName: values.repositoryName,
          ownerName: values.repositoryOwner,
          rating: Number(values.rating),
          text: values.review
        }
      }
    })
    console.log('result: ', data)
    const repositoryId = data.createReview.repository.id
    navigate(`/repository/${repositoryId}`)
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ repositoryOwner: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput
              name='repositoryOwner'
              placeholder='Repository owner name'
            />
            <FormikTextInput
              name='repositoryName'
              placeholder='Repository name'
            />
            <FormikTextInput
              name='rating'
              placeholder='Rating between 0 and 100'
            />
            <FormikTextInput name='review' placeholder='Review' multiline />
            <Button
              name='submit'
              onPress={handleSubmit}
              text='Create a review'
              width='full'
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default CreateRepositoryReview
