import React from 'react'
import { Platform, ScrollView, StyleSheet } from 'react-native'

const RecipeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar_}></View>
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