import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const AddMealScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.add_meal_container}></View>
    </View>
  )
}

export default AddMealScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  add_meal_container: {
    
  }
})