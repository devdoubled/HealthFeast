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
import CustomButton from "../../components/Auth/CustomButton";
const RegisterScreen = ({ navigation }) => {
  const { width } = Dimensions.get("window").width;
  const handlePressGetCode = () => {
    navigation.navigate("GetCodeScreen");
  };
  const handlePressLogin = () => {
    navigation.navigate("LoginScreen");
  };
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
        <CustomButton text="Lấy mã" style={styles.enterCode_btn} />
        <View style={styles.login}>
          <Text style={styles.login_normal}>Bạn đã có tài khoản? </Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed_login_highlight}
            onPress={handlePressLogin}
          >
            <Text style={styles.login_highlight}>Đăng nhập</Text>
          </Pressable>
        </View>
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
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  top_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  login_normal: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
  },
  login_highlight: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#000000",
  },
  pressed_login_highlight: {
    opacity: 0.7,
  },
  login_social_btn: {
    height: 40,
    backgroundColor: "#464646",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  login_social_content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  login_social_img: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 40,
  },
  login_social_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#9ABF5A",
  },
});
