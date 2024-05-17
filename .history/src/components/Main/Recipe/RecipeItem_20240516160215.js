import React from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import RecipeItemIcon from "../../../assets/images/recipe_item_icon.png";
const RecipeItem = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.item_pressed,
      ]}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.recipe_item}
        imageStyle={styles.imageBackground}
      >
        <Image source={RecipeItemIcon} style={styles.item_next} />
        <Text style={styles.recipe_item_title}>{item.title}</Text>
        <View style={styles.recipe_item_details}>
          <Text style={styles.details_text}>{item.calories}</Text>
          <Text style={styles.details_text}>{item.time}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    height: 230,
  },
  recipe_item: {
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  item_next: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 26,
    height: 26,
  },
  imageBackground: {
    borderRadius: 10,
  },
  recipe_item_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 3,
    color: "#FFFFFF",
  },
  recipe_item_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#F3F2F1",
  },
  item_pressed: {
    opacity: 0.9,
  },
});
