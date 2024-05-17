import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

const RecipeScreen = () => {
  const width = Dimensions.get("window").width;
  const [selectedTab, setSelectedTab] = useState('CongThuc');

  const tabData = [
    { key: 'CongThuc', label: 'Công thức' },
    { key: 'KeHoach', label: 'Kế hoạch' },
    { key: 'GoiY', label: 'Gợi ý' }
  ];

  const handleTabPress = (tabKey) => {
    setSelectedTab(tabKey);
    navigation.navigate(tabKey);
  };
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
