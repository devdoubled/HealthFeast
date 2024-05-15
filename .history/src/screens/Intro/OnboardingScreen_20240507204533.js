import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import OnboardingItem from "../../components/Intro/OnboardingItem";
import slides from "../../data/slides";
const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList data={slides} renderItem={({ item }) => <OnboardingItem />} />
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
