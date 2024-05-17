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
  const [selectedTab, setSelectedTab] = useState("CongThuc");

  

  const handleTabPress = (tabKey) => {
    setSelectedTab(tabKey);
    navigation.navigate(tabKey);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleTabPress(item.key)}
      style={[
        styles.tab,
        selectedTab === item.key ? styles.activeTab : styles.inactiveTab,
      ]}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === item.key ? styles.activeText : styles.inactiveText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  return <View style={styles.container}>
    <FlatList
        horizontal
        data={recipeNavbars}
        renderItem={({item}) => <NavbarItem item={item}/>}
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
