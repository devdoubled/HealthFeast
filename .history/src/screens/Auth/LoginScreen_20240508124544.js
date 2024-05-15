import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style>
          <Text>Đăng Nhập</Text>
          <Image source={MainLogo} />
      </View>
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
