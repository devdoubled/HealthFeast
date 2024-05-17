import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";


const RecipeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  

  return (
    <View style={styles.container}>
      <NavbarList/>
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
