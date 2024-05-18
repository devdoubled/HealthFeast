import React from 'react'
import { Platform, ScrollView, StyleSheet } from 'react-native'

const RecipeDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.image_container}></View>
    </ScrollView>
  )
}

export default RecipeDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})