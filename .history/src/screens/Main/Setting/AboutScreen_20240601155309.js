import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})