import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Meal = ({ width, meal }) => {
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}>
      <Text style={styles.meal_type}>{meal.meal}</Text>
      <Text style={styles.meal_desc}>{meal.meal_desc}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.meal_add,
          pressed && styles.meal_pressed,
        ]}
      >
        {/* <AntDesign name="pluscircle" size={24} color="#9ABF5A" /> */}
        <MaterialCommunityIcons name="plus-circle" size={24} color="#9ABF5A" />
        <Text style={styles.meal_add_text}>Thêm món ăn</Text>
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
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  meal_desc: {
    paddingVertical: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#464646",
  },
  meal_add: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#464646",
  },
  meal_add_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginLeft: 20,
    color: "#9ABF5A",
  },
  meal_pressed: {
    opacity: 0.9,
  },
});
