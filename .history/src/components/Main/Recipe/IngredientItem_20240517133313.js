import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const IngredientItem = () => {
  return (
    <View style={styles.ingredient_item}>
      <MaterialCommunityIcons name="food-outline" size={26} color="black" />
      <Text style={styles.ingredient_title}>Cân nặng</Text>
      <View style={styles.ingredient_details}>
        <Text style={styles.number}>300</Text>
        <Text style={styles.unit}><Gr/Text>
      </View>
    </View>
  )
}

export default IngredientItem

const styles = StyleSheet.create({})