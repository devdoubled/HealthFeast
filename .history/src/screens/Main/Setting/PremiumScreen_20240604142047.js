import React from 'react'
import { Platform, StyleSheet, View, Image } from 'react-native'
imp
const PremiumScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image />
      </View>
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