import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AuthStack = () => {
  const clearOnboarding = async () => {

  }
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>Clear</Text>
      </Pressable>
    </View>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
