import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import recipeNavbars from "../../../data/recipeNavbars";
import NavbarItem from "./NavbarItem";
const NavbarList = ({ width, navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState("Công thức");

  useEffect(() => {
    const screen = route.params?.screen ? route.params.screen : "Công thức";
    setSelectedTab(screen);
  }, [route.params]);

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen, { screen: screen });
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

export default NavbarList;

const styles = StyleSheet.create({
  nav_container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 15,
  },
});
