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
import loginOptions from "../../data/loginOptions";
const LoginScreen = () => {
  const { width } = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View style={[styles.input_container, { width }]}>
        <Pressable style={({ pressed }) => pressed && styles.pressed_text}>
          <Text style={styles.forget_text}>Bạn quên mật khẩu?</Text>
        </Pressable>
        <TextInput
          style={styles.input_email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input_password}
          placeholder="Nhập mật khẩu"
          keyboardType="default"
        />
        <View style={styles.signup}>
          <Text style={styles.signup_normal}>Bạn có tài khoản chưa? </Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed_signup_highlight}
          >
            <Text style={styles.signup_highlight}>Đăng ký</Text>
          </Pressable>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.login_btn,
            pressed && styles.login_btn_pressed,
          ]}
        >
          <Text style={styles.login_text}>Đăng nhập</Text>
        </Pressable>
        {loginOptions.map((option) => (
          <Pressable
            key={option.id}
            style={({ pressed }) => [
              styles.login_social_btn,
              pressed && styles.login_btn_pressed,
            ]}
          >
            <View style={styles.login_social_content}>
              <Image source={option.image} style={styles.login_social_img} />
              <Text style={styles.login_social_text}>{option.title}</Text>
              {/* <View style={styles.login_social_empty}></View> */}
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default LoginScreen;

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
    marginVertical: 15,
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
  forget_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#9ABF5A",
  },
  input_email: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  input_password: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signup_normal: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
  },
  signup_highlight: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#000000",
  },
  pressed_signup_highlight: {
    opacity: 0.7,
  },
  login_btn: {
    height: 44,
    backgroundColor: "#9ABF5A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 25,
  },
  login_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  login_btn_pressed: {
    opacity: 0.9,
  },
  login_social_btn: {
    height: 40,
    backgroundColor: "#464646",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 25,
  },
  login_social_content: {
    flexDirection: "row",
    alignItems: "center",
    pad
  },
  login_social_img_container: {
    width: 100,
  },
  login_social_img: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  login_social_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#9ABF5A",
  },
  login_social_empty: {
    width: 22,
    height: 22,
  },
});
