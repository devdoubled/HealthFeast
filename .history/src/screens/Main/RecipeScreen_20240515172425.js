import React from "react";
import { Dimensions, FlatList, Platform, StyleSheet, View } from "react-native";
import NavbarItem from "../../components/Main/Recipe/NavbarItem";
import recipeNavbars from "../../data/recipeNavbars";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={[styles.recipe_navbar, { width: width - 32 }]}>
        <FlatList
          data={recipeNavbars}
          renderItem={({ item }) => <NavbarItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  recipe_navbar: {
    width: "100%",
    marginTop: 20,
    marginHorizontal: 16,
  },
});
