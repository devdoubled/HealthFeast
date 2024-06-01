import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelpScreen = () => {
  return (
    <View>
      <Text>HelpScreen</Text>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})