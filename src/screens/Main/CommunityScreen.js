import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";

const CommunityScreen = () => {
  return <ScrollView style={styles.container}></ScrollView>;
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
});
