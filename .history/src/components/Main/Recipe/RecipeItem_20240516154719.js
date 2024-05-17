import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RecipeItemIcon from ".."
const RecipeItem = ({ item }) => {
  return (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.recipe_item}
      imageStyle={styles.imageBackground}
    >
      <Text style={styles.recipe_item_title}>{item.title}</Text>
      <View style={styles.recipe_item_details}>
        <Text style={styles.details_text}>{item.calories}</Text>
        <Text style={styles.details_text}>{item.time}</Text>
      </View>
    </ImageBackground>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  recipe_item: {
    flex: 1,
    height: 220,
    margin: 5,
    padding: 8,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  imageBackground: {
    borderRadius: 10,
  },
  recipe_item_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginBottom: 3,
    color: "#FFFFFF"
  },
  recipe_item_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#F3F2F1"
  }
});
