import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExerciseScreen</Text>
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