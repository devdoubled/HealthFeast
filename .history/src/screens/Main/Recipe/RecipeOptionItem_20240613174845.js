import React from 'react'
import { Image, Pressable, StyleSheet, Text } from 'react-native'

const RecipeOptionItem = ({ item }) => {
  return (
    <Pressable style={styles.recipe_option}>
      <Image source={RecipeRice}/>
      <Text style={styles.recipe_option_name}>Cơm các loại</Text>
    </Pressable>
  )
}

export default RecipeOptionItem

const styles = StyleSheet.create({
  recipe_option: {
    width: 140,
    padding: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#F3F2F1",
  },
  recipe_option_name: {
    paddingTop: 5,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  recipe_option_pressed: {
    opacity: 0.7,
  },
})