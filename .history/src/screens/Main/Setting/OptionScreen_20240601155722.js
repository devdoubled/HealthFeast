import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const OptionScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})