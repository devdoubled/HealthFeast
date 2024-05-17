import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const RecipeScreen = ({navigation}) => {
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
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.sccontainer}
      >
        {tabData.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => handleTabPress(tab.key)}
            style={[
              styles.tab,
              selectedTab === tab.key ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab.key
                  ? styles.activeText
                  : styles.inactiveText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  scrollView: {
    backgroundColor: "#4d4d4d", // Dark background for the entire tab bar
    height: 50, // Set the fixed height of the ScrollView
  },
  container: {
    flexGrow: 1, // Ensure the container can grow to use up space
    alignItems: "center", // Center items vertically in the container
    paddingVertical: 10, // Padding top and bottom within the container
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#66cc33", // Active tab color
  },
  inactiveTab: {
    backgroundColor: "#4d4d4d", // Inactive tab color
  },
  tabText: {
    fontSize: 16,
  },
  activeText: {
    color: "#ffffff", // White color for active tab text
  },
  inactiveText: {
    color: "#cccccc", // Light grey color for inactive tab text
  },
});
