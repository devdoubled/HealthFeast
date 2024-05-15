import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
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
  container: {
    width: "272px",
    height: "272px",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    he
  },
});
