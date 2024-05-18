import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const RecipeDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
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