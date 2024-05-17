import React from "react";
import { Image, StyleSheet, Text, View, ImageBackground  } from "react-native";

const RecipeItem = ({ item }) => {
  return (
    <ImageBackground source={{ uri: item.image }}  style={styles.recipe_item}>
      <Text style={styles.recipe_item_title}>{item.title}</Text>
      <View styles={styles.recipe_item_details}>
        {/* <Text style={styles.details}>{item.calories}</Text>
        <Text style={styles.details}>{item.time}</Text> */}
      </View>
    </ImageBackground>
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
  recipe_item_title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  recipe_item_details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
