import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View></View>
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