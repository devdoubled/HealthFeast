import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur';
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
const RecipeItem = React.memo(({ item, navigation }) => {
  const handleDetailRecipePress = () => {
    navigation.navigate("RecipeDetailScreen", { recipeId: item.recipeId });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.item_pressed,
      ]}
      onPress={handleDetailRecipePress}
    >
      <ImageBackground
        source={{ uri: item.images[0].imagePath }}
        style={styles.recipe_item}
        imageStyle={styles.imageBackground}
      >
        <FontAwesome5 name="arrow-alt-circle-right" size={24} color="white" style={styles.item_next} />
        <View style={styles.recipe_content}>
          <BlurView intensity={50} style={styles.absolute} />
          <Text style={styles.recipe_item_title} numberOfLines={1} ellipsizeMode="tail">{item.recipeName}</Text>
          <View style={styles.recipe_item_details}>
            <Text style={styles.details_text}>{item.totalCalories} kCal</Text>
            <Text style={styles.details_text}>{item.timeInMinute} Phút</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
});

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
  recipe_content: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  recipe_item_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    marginBottom: 3,
    color: "#FFFFFF",
    maxWidth: 200,
    overflow: 'hidden',
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
