import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
import CustomButton from "../../components/Auth/CustomButton";
const EnterPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Nhập mật khẩu</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View
        style={[
          styles.input_container,
          { width: Dimensions.get("window").width - 50 },
        ]}
      >
        <Text style={styles.yourAccount}>Tài khoản của bạn</Text>
        <View style={styles.yourAccount_input}>
          <Text style={styles.yourAccount_detail}>duyledl2002@gmail.com</Text>
        </View>
        <View style={styles.line}></View>
        <TextInput
          style={styles.input_password}
          placeholder="Nhập mật khẩu"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input_rePassword}
          placeholder="Nhập lại mật khẩu"
          keyboardType="default"
          secureTextEntry={true}
        />
        <View style={styles.warning_text}>
          <Text style={styles.inforPass}>mật khẩu phải có ít nhất 6 kí tự</Text>
          <Text style={styles.inforPass}>
            bao gồm chữ cái thường, chữ hoa và số
          </Text>
        </View>
        <CustomButton text="Đăng nhập" />
      </View>
    </View>
  );
};

export default EnterPasswordScreen;

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
  yourAccount: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "#B4B4B4",
  },
  yourAccount_input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  yourAccount_detail: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "#9ABF5A",
  },
  line: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#B4B4B4",
  },
  input_password: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  input_rePassword: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  warning_text: {
    marginBottom: 15,
  },
  inforPass: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#B4B4B4",
  },
});
