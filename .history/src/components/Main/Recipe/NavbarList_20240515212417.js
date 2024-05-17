import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import recipeNavbars from "../../../data/recipeNavbars";
import NavbarItem from "./NavbarItem";
const NavbarList = ({ width, navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Công thức");

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen, screen);
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
