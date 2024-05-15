import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Đăng Nhập</Text>
        <Image source={MainLogo} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  container: {

  }
});
