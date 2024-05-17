import React from "react";
import { Dimensions, Platform, StyleSheet, View, Image } from "react-native";
import NavbarList from "../../../components/Main/Recipe/NavbarList";
import RecipeIconText from "../../../assets/images/activity_normal.png"
const RecipeScreen = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  // const handleDetailRecipePress = () => {
  //   navigation.navigate("RecipeDetailScreen");
  // };
  return (
    <View style={styles.container}>
      <NavbarList width={width} navigation={navigation} route={route} />
      <View>
        <Image source={RecipeIconText}/>
        <View></View>
      </View>
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
