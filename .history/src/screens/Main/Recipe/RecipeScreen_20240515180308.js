import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
