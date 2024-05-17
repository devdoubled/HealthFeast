import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const RecipeScreen = () => {
  return (
    <ScrollView style={styles.container}>
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