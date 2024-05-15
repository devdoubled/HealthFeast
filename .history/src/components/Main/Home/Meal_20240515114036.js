import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Meal = ({ width, meal }) => {
  return <View style={[styles.meal_container, { width: width - 32 }]}>
<Text style={styles.meal_type}>{}</Text>
  </View>;
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
});
