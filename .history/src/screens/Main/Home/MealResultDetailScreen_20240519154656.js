import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import React from "react";

const MealResultDetailScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View
        style={[styles.result_detail_container, { width: width - 32 }]}
      >
        
      </View>
    </View>
  );
};

export default MealResultDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  result_detail_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#2E2E2E",
  },
});
