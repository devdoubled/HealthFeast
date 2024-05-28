import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

const ExerciseDetailScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.exercise_detail_container, { width: width - 32 }]}>

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
  exercise_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
  }
})