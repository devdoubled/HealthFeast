import React, { useState } from "react";
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
import CustomButton from "../../components/Auth/CustomButton";
import Loading from "../../components/Loading";
import loginOptions from "../../data/loginOptions";
import apiClient from "../../services/apiService";

const RegisterScreen = ({ navigation }) => {
  const { width } = Dimensions.get("window").width;
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  const handlePressGetCode = async () => {
    if (!isValidEmail(email)) {
      setErrorMsg("Invalid email address");
      return;
    }
    setIsLoading(true)
    const registerData = {
      email: email
    }

    try {
      await apiClient.post("/Account/register/email", registerData)
      navigation.navigate("GetCodeScreen", { email: email });
    } catch (error) {
      setErrorMsg(error.response.data.message);
    } finally {
      setIsLoading(false)
      setEmail("")
    }
  };

  const isValidEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(email);
}

  if (isLoading) {
    return <Loading />;
  }

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
          spellCheck={false}
          autoCapitalize={false}
          onChangeText={setEmail}
        />
        {errorMsg && (
          <View style={styles.error}>
            <Text style={styles.error_text}>{errorMsg}</Text>
          </View>
        )}
        <CustomButton
          text="Lấy mã"
          style={[styles.getCode_btn,  { marginTop: errorMsg ? 10 : 15 }]}
          onPress={handlePressGetCode}
          disabled={email === ""}
        />
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
              <View style={styles.login_social_img}>{option.image}</View>
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
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  error: {
    marginTop: 10,
  },
  error_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "red",
  },
  getCode_btn: {
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
    marginRight: 40,
  },
  login_social_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#9ABF5A",
  },
  login_btn_pressed: {
    opacity: 0.9,
  },
});
