import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
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
