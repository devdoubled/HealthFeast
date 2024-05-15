import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainStack = () => {
  return (
    <View>
      <AskingScreen />
      <Text>NGU LOZ</Text>
    </View>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
