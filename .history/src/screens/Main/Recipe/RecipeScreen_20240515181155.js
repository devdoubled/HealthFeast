import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const RecipeScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const [selectedTab, setSelectedTab] = useState("CongThuc");

  const tabData = [
    { key: "CongThuc", label: "Công thức" },
    { key: "KeHoach", label: "Kế hoạch" },
    { key: "GoiY", label: "Gợi ý" },
  ];

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
        data={tabData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.scrollContainer}
      />
  </View>;
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
