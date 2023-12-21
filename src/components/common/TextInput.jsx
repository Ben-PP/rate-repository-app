import { TextInput as NativeTextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  textInput: {
    flexGrow: 1,
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

const TextInput = ({ style, error, leading, trailing, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.error, style]

  return (
    <View style={styles.container}>
      {leading}
      <NativeTextInput style={textInputStyle} {...props} />
      {trailing && trailing}
    </View>
  )
}

export default TextInput
