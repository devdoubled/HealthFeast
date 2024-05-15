import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const RegisterScreen = () => {
  const { width } = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Ký</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View style={[styles.input_container, { width }]}>
        <TextInput
          style={styles.input_email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Pressable
          style={({ pressed }) => [
            styles.getCode_btn,
            pressed && styles.getCode_btn_pressed,
          ]}
        >
          <Text style={styles.getCode_text}>Lấy mã</Text>
        </Pressable>
        <View style={styles.login}>
          <Text style={styles.login_normal}>Bạn đã có tài khoản? </Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed_login_highlight}
            onPress={handlePressRegister}
          >
            <Text style={styles.login_highlight}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
  top_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 26,
    color: "#000000",
  },
  main_logo: {
    resizeMode: "cover",
    marginTop: 20,
  },
  input_container: {
    width: "100%",
    marginHorizontal: 25,
  },
  input_email: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  getCode_btn: {
    height: 44,
    backgroundColor: "#9ABF5A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 25,
  },
  getCode_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  getCode_btn_pressed: {
    opacity: 0.9,
  },
});
