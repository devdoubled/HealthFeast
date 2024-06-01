import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const NotifyScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default NotifyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})