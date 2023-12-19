import { View, StyleSheet } from 'react-native'
import theme from '../../theme'
import Text from '../common/Text'

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const StatItem = ({ label, number }) => {
  if (number >= 1000) {
    number = (number / 1000).toFixed(1) + 'k'
  }
  return (
    <View style={styles.statItem}>
      <Text
        style={{
          fontSize: theme.fontSizes.subheading,
          fontWeight: theme.fontWeights.bold
        }}
      >
        {number}
      </Text>
      <Text>{label}</Text>
    </View>
  )
}

export default StatItem
