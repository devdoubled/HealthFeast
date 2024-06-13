import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecipeOptionItem = () => {
  return (
    <Pressable style={styles.recipe_option}>
            <Image source={RecipeRice} style={styles.recipe_option_img}/>
            <Text style={styles.recipe_option_name}>Cơm các loại</Text>
          </Pressable>
  )
}

export default RecipeOptionItem

const styles = StyleSheet.create({
    
})