import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
const IngredientItem = () => {
  return (
    <View style={styles.ingredient_item}>
      <MaterialCommunityIcons name="food-outline" size={26} color="black" />
      <Text>
    </View>
  )
}

export default IngredientItem

const styles = StyleSheet.create({})