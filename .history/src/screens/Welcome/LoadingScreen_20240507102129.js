import React from "react";
import { Image, StyleSheet, View } from "react-native";

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
    width: "272px",
    height: "272px",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
});
