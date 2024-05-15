import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const AuthStack = () => {
  const clearOnboarding = async () => {
    try {
      console.log("press enter to clear");
      await AsyncStorage.removeItem("@viewOnboarding");
    } catch (e) {
      console.log("error removing");
    }
  };
  return (
    <View style={styles.container}>
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
