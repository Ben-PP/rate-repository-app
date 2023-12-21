import { View, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  button: {
    flexGrow: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
})

const Button = ({
  onPress,
  text,
  width,
  textColor,
  color,
  style,
  ...props
}) => {
  const containerStyle = [
    styles.container,
    width === 'full' && { width: '100%' }
  ]
  const buttonStyle = [
    styles.button,
    color === 'red' && { backgroundColor: 'red' },
    style
  ]
  return (
    <View style={containerStyle}>
      <Pressable style={buttonStyle} onPress={onPress} {...props}>
        <Text color={textColor}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default Button
