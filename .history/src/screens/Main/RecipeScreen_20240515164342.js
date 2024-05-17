import React from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'

const RecipeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.recipe_navbar}></View>
    </ScrollView>
  )
}

export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
      },
})