import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const AuthStack = () => {
  const clearOnboarding = async () => {
    try {
      log
      await AsyncStorage.removeItem("@viewOnboarding");
    } catch (e) {
      console.log("error removing");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
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
