import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react-native'
import SignInForm from '../components/SignIn/SignInForm'
import { act } from 'react-test-renderer'

describe('SignInForm', () => {
  describe('On submit', () => {
    test('calls onSubmit function with correct arguments', async () => {
      const onSubmit = jest.fn()
      render(<SignInForm onSubmit={onSubmit} />)
      await act(async () => {
        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
        fireEvent.changeText(
          screen.getByPlaceholderText('Password'),
          'password'
        )
      })
      fireEvent.press(screen.getByText('Sign in'))
      expect(screen.getByText('Sign in')).toBeDefined()
      await waitFor(() =>
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        })
      )
      /*
      fireEvent.changeText(getByName('username'), 'kalle')
      fireEvent.changeText(getByName('password'), 'password')
        */
    })
  })
})
