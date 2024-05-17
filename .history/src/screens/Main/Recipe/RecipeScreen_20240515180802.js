import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
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
});
