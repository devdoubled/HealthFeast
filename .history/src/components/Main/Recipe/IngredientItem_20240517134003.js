import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const IngredientItem = () => {
  return (
    <View style={styles.ingredient_item}>
      <MaterialCommunityIcons name="food-outline" size={22} color="#000000" />
      <Text style={styles.ingredient_title}>Cân nặng</Text>
      <View style={styles.ingredient_details}>
        <Text style={styles.number}>300</Text>
        <Text style={styles.unit}>Grams</Text>
      </View>
    </View>
  )
}

export default IngredientItem

const styles = StyleSheet.create({
    ingredient_item: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: ""
    },
    ingredient_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 15,
        color: "#000000",
        paddingVertical: 8,
    },
    ingredient_details: {
        flexDirection: "row", 
        alignItems: "flex-end"
    },
    number: {
        fontFamily: "Montserrat-Medium",
        fontSize: 15,
        color: "#000000"
    },
    unit: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#B4B4B4",
        marginLeft: 8
    }
})