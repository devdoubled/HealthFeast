import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AuthStack = () => {
  return (
    <View style={styles.container}>
      <Pressable>Clear</Pressable>
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
