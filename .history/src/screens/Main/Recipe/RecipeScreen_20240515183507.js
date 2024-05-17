import React, { useState } from "react";
import { Dimensions, FlatList, Platform, StyleSheet, View } from "react-native";
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
      {/* <FlatList
        data={recipeNavbars}
        renderItem={({ item }) => (
          <NavbarItem
            item={item}
            selectedTab={selectedTab}
            handleTabPress={handleTabPress}
          />
        )}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollContainer}
      /> */}
      <View style={styles.nav_container}></View>
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
  scrollContainer: {
    marginHorizontal: 16,
    marginVertical: 15,
  },
});
