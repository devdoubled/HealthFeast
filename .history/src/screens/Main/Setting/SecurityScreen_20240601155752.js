import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const SecurityScreen = () => {
  return (
    <View>
      <Text>SecurityScreen</Text>
    </View>
  )
}

export default SecurityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})