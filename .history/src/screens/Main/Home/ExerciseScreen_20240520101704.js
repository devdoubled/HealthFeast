import React from 'react'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'

const ExerciseScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
       <View style={[styles.add_meal_container, { width: width - 32 }]}>
        
       </View>
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