import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AddMealIcon from "../../../assets/images/meal_add_icon.png";
const Meal = ({ width, meal }) => {
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}>
      <Text style={styles.meal_type}>{meal.meal}</Text>
      <Text style={styles.meal_desc}>{meal.meal_desc}</Text>
      <Pressable style={styles.meal_add}>
        <Image source={AddMealIcon}/>
      </Pressable>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  meal_container: {
    borderRadius: 13,
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F3F2F1",
  },
  meal_type: {
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    color: "#000000"
  },
  meal_desc: {
    paddingVertical: 10,
    fontFamily: "Montserrat Regular",
    fontSize: 14,
    color: "#464646"
  },
  meal_add: {
    width: "100%",
    flexDirection: "row",
    aligh
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#464646",
  }
});
