import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const Meal = ({ width, meal, handleAddMealPress }) => {
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}>
      <Text style={styles.meal_type}>{meal.meal}</Text>
      <Text style={styles.meal_desc}>{meal.meal_desc}</Text>
      <View style={styles.list_meal}>
        <View style={styles.meal_item}>
          <Image style={styles.meal_item_img} source={{url: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/blog/com-trang-bao-nhieu-calo.webp"}}/>
          <View style={styles.meal_item_content}>
            <Text style={styles.meal_item_name}>Cơm</Text>
            <Text style={styles.meal_item_calories}>189 kCal</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.meal_add,
          pressed && styles.meal_pressed,
        ]}
        onPress={() => handleAddMealPress(meal.id)}
      >
        <MaterialCommunityIcons name="plus-circle" size={30} color="#9ABF5A" />
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
  list_meal: {
    marginBottom: 10,
  },
  meal_item: {
    flexDirection: "row",
    alignItems: "center",
  },
  meal_item_img: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
  },
  meal_item_content: {
    flexDirection: "column",
    alignItems: "center"
  },
  meal_item_name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "#000000",
  },
  meal_item_calories: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "#000000",
    paddingTop: 3,
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
    marginLeft: 15,
    color: "#9ABF5A",
  },
  meal_pressed: {
    opacity: 0.9,
  },
});
