import React from "react";
import { Platform, ScrollView, StyleSheet, Text } from "react-native";

const SearchScreen = ({ navigation, route }) => {
  return <ScrollView style={styles.container}>
    <NavbarList width={width} navigation={navigation} route={route} />
  </ScrollView>;
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
