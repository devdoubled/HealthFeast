import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import recipeNavbars from "../../../data/recipeNavbars";
import NavbarItem from "./NavbarItem";
const NavbarListRecipe = ({ width, navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState("Công thức");

  useEffect(() => {
    const screen = route.params?.screen ? route.params.screen : "Công thức";
    setSelectedTab(screen);
  }, [route.params]);

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen, { screen: title });
  };
  return (
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
  );
};

export default NavbarListRecipe;

const styles = StyleSheet.create({
  nav_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 20,
  },
});
