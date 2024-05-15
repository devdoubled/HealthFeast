import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const LoginScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View style={[styles.input_container, width]}>
        <Pressable style={({ pressed }) => pressed && styles.pressed_text}>
          <Text style={styles.forget_text}>Bạn quên mật khẩu?</Text>
        </Pressable>
        <View style={styles.input_email}>
          <Text style={styles.placeholder}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  top_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 26,
    color: "#000000",
  },
  main_logo: {
    resizeMode: "cover",
    marginVertical: 20,
  },
  input_container: {
    marginHorizontal: 25,
  },
  forget_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#9ABF5A",
  },
  input_email: {
    position: "relative",
    marginVertical: 15,
  },
  input: {
    width: 350,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  placeholder: {
    position: "absolute",
    left: 12,
    top: 8,
    color: "#A9A9A9",
    fontSize: 16,
  },
});
