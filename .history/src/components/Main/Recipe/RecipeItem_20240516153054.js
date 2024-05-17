import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RecipeItem = ({ item }) => {
  return (
    <View style={styles.recipe_item}>
      <Image source={{ uri: item.image }} style={styles.recipe_item_image} />
      <Text style={styles.recipe_item_title}>{item.}</Text>
      <Text style={styles.details}>{item.calories}</Text>
      <Text style={styles.details}>{item.time}</Text>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
    recipe_item: {
    flex: 1,
    height: 205,
    margin: 8,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  recipe_item_image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  recipe_item_title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
});
