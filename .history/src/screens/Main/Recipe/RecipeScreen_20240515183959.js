import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarItem from "../../../components/Main/Recipe/NavbarItem";
import recipeNavbars from "../../../data/recipeNavbars";

const RecipeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const [selectedTab, setSelectedTab] = useState("Công thức");

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.nav_container, { width: width - 32 }]}>
        {recipeNavbars.map((item) => (
          <NavbarItem
            key={item.id}
            item={item}
            selectedTab={selectedTab}
            handleTabPress={handleTabPress}
          />
        ))}
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#ffffff",
  },
  nav_container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 15,
  },
});
