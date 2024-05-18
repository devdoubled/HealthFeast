import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text
} from "react-native";

const RecipeDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.image_container, { width: width - 32 }]}>
        <Image
          source={{
            uri: "https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg",
          }}
          style={styles.recipe_image}
        />
      </View>
      <Text style={styles.recipe_name}>Cơm ức gà</Text>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  image_container: {
    marginHorizontal: 16,
    marginVertical: 15,
  },
  recipe_image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 12,
  },
  recipe_name: {
    fontFamily: "Montserrat_"
  }
});
