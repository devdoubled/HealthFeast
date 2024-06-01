import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const OptionScreen = () => {
  return (
    <View>
      <Text>OptionScreen</Text>
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