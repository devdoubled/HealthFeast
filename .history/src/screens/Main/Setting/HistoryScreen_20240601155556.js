import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryScreen = () => {
  return (
    <View>
      <Text>HistoryScreen</Text>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})