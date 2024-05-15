import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View>
      <View>
        <Image source={require("../../../assets/images/logo.png")} />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
});
