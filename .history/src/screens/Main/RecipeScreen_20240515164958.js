import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.recipe_navbar}>
        <FlatList/>
      </View>
    </ScrollView>
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
    marginLeft: 16,
    backgroundColor: "red"
  },
});
