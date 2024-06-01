import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const PremiumScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default PremiumScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})