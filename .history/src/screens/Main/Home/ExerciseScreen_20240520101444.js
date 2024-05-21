import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default ExerciseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})