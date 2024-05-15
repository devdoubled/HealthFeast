import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Meal = ({ width, meal }) => {
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}>
      <Text style={styles.meal_type}>{meal.meal}</Text>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  meal_container: {
    height: 150,
    borderRadius: 13,
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F3F2F1",
  },
  meal_type: {
    fontFamily: "Mon"
  }
});
