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
const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Lấy lại mật khẩu</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
      <View
        style={[
          styles.input_container,
          { width: Dimensions.get("window").width - 50 },
        ]}
      >
        <TextInput
          style={styles.input_email}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View
        style={[
          styles.action_container,
          { width: Dimensions.get("window").width - 50 },
        ]}
      >
        <CustomButton text="Lấy mã" />
        <CustomButton text="Lấy mã" />
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
  action_container: {},
});
