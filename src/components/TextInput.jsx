import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  error: {
    borderColor: '#d73a4a'
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.error, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
