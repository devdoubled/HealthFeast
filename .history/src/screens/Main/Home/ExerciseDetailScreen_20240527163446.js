import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ExerciseDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExerciseDetailScreen</Text>
    </View>
  )
}

export default ExerciseDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})