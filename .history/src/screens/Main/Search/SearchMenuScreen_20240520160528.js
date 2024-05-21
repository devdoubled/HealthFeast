import { StyleSheet, Text, ScrollView, Platform } from "react-native";
import React from "react";
import NavbarList from "../../../components/Main/Search/NavbarList";
const SearchMenuScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
    </ScrollView>
  );
};

export default SearchMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
