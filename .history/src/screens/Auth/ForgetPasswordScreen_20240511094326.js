import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Nhập mật khẩu</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

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
});
