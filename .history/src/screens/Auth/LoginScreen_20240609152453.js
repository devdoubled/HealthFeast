import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';
import React, { useRef, useState } from "react";
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

const LoginScreen = ({ navigation }) => {
  const { width } = Dimensions.get("window").width;
  const passwordInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const handlePressLogin = async () => {
    setIsLoading(true)
    const loginData = {
      email: email,
      password: password
    }
    try {
      const response = await apiClient.post("/Account/login", loginData);

      const token = response.data.token;
      await AsyncStorage.setItem("userToken", token);

      const isNewUser = response.data.account.status;
      if (isNewUser === 2) {
        navigation.navigate("AskingScreen", { userId: response.data.account.accountId });
      } 
      else if (isNewUser === 3) {
        navigation.navigate("MainStack");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        setErrorMsg(error.response.data.message)
      }
    } finally {
      setIsLoading(false)
      setEmail("")
      setPassword("")
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const handlePressRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const handlePressForgetPassword = () => {
    navigation.navigate("ForgetPasswordScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View style={[styles.input_container, { width }]}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed_text}
          onPress={handlePressForgetPassword}
        >
          <Text style={styles.forget_text}>Bạn quên mật khẩu?</Text>
        </Pressable>
        <TextInput
          style={styles.input_email}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          spellCheck={false}
          autoCapitalize={false}
          onSubmitEditing={() => passwordInputRef.current.focus()}
        />
        <TextInput
          ref={passwordInputRef}
          style={styles.input_password}
          placeholder="Nhập mật khẩu"
          keyboardType="default"
          secureTextEntry={true}
          spellCheck={false}
          autoCapitalize={false}
          onChangeText={setPassword}
        />
        {errorMsg && (
          <View style={styles.error}>
            <Text style={styles.error_text}>{errorMsg}</Text>
          </View>
        )}

        <View style={[styles.signup, { marginTop: errorMsg ? 10 : 15 }]}>
          <Text style={styles.signup_normal}>Bạn có tài khoản chưa? </Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed_signup_highlight}
            onPress={handlePressRegister}
          >
            <Text style={styles.signup_highlight}>Đăng ký</Text>
          </Pressable>
        </View>
        <CustomButton
          text="Đăng nhập"
          style={styles.login_btn}
          onPress={handlePressLogin}
          disabled={email === "" || password === ""}
        />
        {loginOptions.map((option) => (
          <Pressable
            key={option.id}
            style={({ pressed }) => [
              styles.login_social_btn,
              pressed && styles.login_btn_pressed,
            ]}
          >
            <View style={styles.login_social_content}>
              <View style={styles.login_social_img}>
                {option.image}
              </View>
              <Text style={styles.login_social_text}>{option.title}</Text>
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
    width: "100%",
    marginHorizontal: 25,
  },
  forget_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#9ABF5A",
  },
  input_email: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  input_password: {
    paddingVertical: 12,
    paddingHorizontal: 12,
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
    marginVertical: 20,
  },
  login_btn_pressed: {
    opacity: 0.9,
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
});
