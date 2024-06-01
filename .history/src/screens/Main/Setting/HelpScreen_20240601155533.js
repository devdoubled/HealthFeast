import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const HelpScreen = () => {
  return (
    <View style={styles.container}>
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