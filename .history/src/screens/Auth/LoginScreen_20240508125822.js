import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <Image source={MainLogo} />
      <View style={styles.input_container}>
        <Pressable>
          <Text style={({pressed}) => [styles.forget_text, pressed && styles.]}>Bạn quên mật khẩu?</Text>
        </Pressable>
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
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    color: "#000000",
  },
  input_container: {
    marginHorizontal: 15,
  },
  forget_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#9ABF5A",
  },
  pressed_text: {
    textDecorationStyle: "underline",
  },
});