import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainLogo from "../"
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Đăng Nhập</Text>
      <Image />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
