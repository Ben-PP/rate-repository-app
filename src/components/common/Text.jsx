import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorTertiary: {
    color: theme.colors.textTertiary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
})

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'tertiary' && styles.colorTertiary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text
