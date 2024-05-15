import React from "react";
import { StyleSheet, View } from "react-native";
import AskingScreen from "../screens/Asking/AskingScreen";
const MainStack = () => {
  return (
    <View style={styles.container}>
      <AskingScreen/>
    </View>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#ffffff"
  },
});
