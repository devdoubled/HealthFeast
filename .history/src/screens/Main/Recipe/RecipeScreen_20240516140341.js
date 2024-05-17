import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";

const RecipeScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <NavbarList
        width={width}
        navigation={navigation}
        route={route}
      />
      <Button>
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
