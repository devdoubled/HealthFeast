import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
})