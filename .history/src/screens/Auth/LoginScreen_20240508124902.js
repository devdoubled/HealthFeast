import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <Image source={MainLogo} />
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
  title: {
    fontFamily: ""
  }
});
