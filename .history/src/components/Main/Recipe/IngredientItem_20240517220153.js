import React from "react";
import { StyleSheet, Text, View } from "react-native";
const IngredientItem = ({ icon, title, number, unit }) => {
  return (
    <View
      style={[
        styles.ingredient_item,
        title === "Cân nặng" || title === "Lượng calo"
          ? styles.border
          : null,
      ]}
    >
      {icon}
      <Text style={styles.ingredient_title}>{title}</Text>
      <View style={styles.ingredient_details}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

export default IngredientItem;

const styles = StyleSheet.create({
  ingredient_item: {},
  border: {
    paddingRight: 30,
    borderRightWidth: 0.4,
    borderColor: "#B4B4B4",
  },
  ingredient_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#000000",
    paddingVertical: 8,
  },
  ingredient_details: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  number: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "#000000",
  },
  unit: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
    marginLeft: 10,
  },
});
