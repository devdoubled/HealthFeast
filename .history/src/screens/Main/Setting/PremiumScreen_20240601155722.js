import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const PremiumScreen = () => {
  return (
    <View>
      <Text>PremiumScreen</Text>
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