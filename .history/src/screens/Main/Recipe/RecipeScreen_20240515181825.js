import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import recipeNavbars from "../../../data/recipeNavbars";

const RecipeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const [selectedTab, setSelectedTab] = useState("Công thức");

  const handleTabPress = (screen, title) => {
    setSelectedTab(title);
    navigation.navigate(screen);
  };

  return <View style={styles.container}>
    <FlatList
        horizontal
        data={recipeNavbars}
        renderItem={({item}) => <NavbarItem item={item} selectedTab={selectedTab} />}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        contentContainerStyle={styles.scrollContainer}
      />
  </View>;
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  flatList: {
    height: 50,
    backgroundColor: "#4d4d4d",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  
});
