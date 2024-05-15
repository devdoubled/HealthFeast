import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import slides from "../../data/slides";
const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList data={slides} />
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
