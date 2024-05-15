import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <Image source={MainLogo} />
      <View style={[styles.input_container, width]}>
        <Pressable>
          <Text style={styles.forget_text}>Bạn quên mật khẩu?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  title: {
    position: "absolute",
    top: 100,
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
