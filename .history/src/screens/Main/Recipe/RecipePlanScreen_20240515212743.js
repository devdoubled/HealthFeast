import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
const RecipePlanScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const { screen } = route.params ? route.params : { screen: "Công thức" };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} selectedScreen={
        screen
      }/>
    </View>
  );
};

export default RecipePlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#ffffff",
  },
});
