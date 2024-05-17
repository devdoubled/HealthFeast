import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";

const RecipeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const { screen } = route.params ? route.params : { screen: "LoginScreen" };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation}/>
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
  
});
