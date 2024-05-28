import React from 'react'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'

const ExerciseDetailScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.exercise_detail_container}>
        
      </View>
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