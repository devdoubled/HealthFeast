import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import communityNavbars from "../../../data/communityNavbars";
import NavbarItem from "./NavbarItem";
const NavbarList = ({ width, navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState("Scan");

  useEffect(() => {
    const screen = route.params?.screen ? route.params.screen : "Scan";
    setSelectedTab(screen);
  }, [route.params]);

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen, { screen: title });
  };
  return (
    <View style={[styles.nav_container, { width: width - 32 }]}>
      {communityNavbars.map((item) => (
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
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 20,
  },
});
