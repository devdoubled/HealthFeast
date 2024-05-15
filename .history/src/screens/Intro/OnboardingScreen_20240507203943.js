import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList></Flast>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
