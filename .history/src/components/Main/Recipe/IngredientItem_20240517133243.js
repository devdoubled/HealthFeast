import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const IngredientItem = () => {
  return (
    <View style={styles.ingredient_item}>
      <MaterialCommunityIcons name="food-outline" size={26} color="black" />
      <Text style={styles.ingredient_title}>Cân nặng</Text>
      <View styls={styles.ingredient_details}>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  )
}

export default IngredientItem

const styles = StyleSheet.create({})