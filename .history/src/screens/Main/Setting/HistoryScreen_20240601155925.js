import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})