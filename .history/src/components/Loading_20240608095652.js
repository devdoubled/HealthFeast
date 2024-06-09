import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#9ABF5A" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
})