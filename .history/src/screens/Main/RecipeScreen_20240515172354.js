import React, { useRef } from "react";
import { Dimensions, FlatList, Platform, StyleSheet, View, Animated } from "react-native";
import NavbarItem from "../../components/Main/Recipe/NavbarItem";
import recipeNavbars from "../../data/recipeNavbars";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={[styles.recipe_navbar, { width: width - 32 }]}>
        <Animated.FlatList
          data={recipeNavbars}
          renderItem={({ item }) => <NavbarItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true } // Make sure to set this to true for performance
          )}
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