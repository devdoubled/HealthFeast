import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const Meal = ({ width, meal, mealData, handleAddMealPress }) => {
  const getMealData = (mealId, mealData) => {
    switch (mealId) {
      case 1:
        return mealData.breakfast;
      case 2:
        return mealData.lunch;
      case 3:
        return mealData.dinner;
      case 4:
        return mealData.snack;
      default:
        return [];
    }
  };
  const mealItems = getMealData(meal.id, mealData);
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}>
      <Text style={styles.meal_type}>{meal.meal}</Text>
      <Text style={styles.meal_desc}>{meal.meal_desc}</Text>
      <View style={styles.list_meal}>
        {mealItems.length > 0 && mealItems.map((mealItem) => (
          <View style={styles.meal_item} key={mealItem.mealId}>
            <Image style={styles.meal_item_img} source={{ url: mealItem.image }} />
            <View style={styles.meal_item_content}>
              <Text style={styles.meal_item_name}>{mealItem.mealName}</Text>
              <Text style={styles.meal_item_calories}>{mealItem.calCalories} kCal</Text>
            </View>
          </View>
        ))}
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
    flexDirection: "column",
  },
  meal_item: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingBottom: 10,
  },
  meal_item_img: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
  },
  meal_item_content: {
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
