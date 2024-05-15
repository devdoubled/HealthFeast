import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

const EnterPasswordScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>EnterPasswordScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default EnterPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
});
