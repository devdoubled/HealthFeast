import React from "react";
import { Image, StyleSheet, View, Animated } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
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
    backgroundColor: "#ffffff",
  },
  container: {
    overflow: "hidden",
  },
  logo: {
    resizeMode: "cover",
  },
});
