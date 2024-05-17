import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecipeScreen = () => {
  return (
    <View>
      <Text>RecipeScreen</Text>
    </View>
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