import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import MainLogo from "../../assets/images/main-logo.png";
const EnterPasswordScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Ký</Text>
        <Image source={MainLogo} style={styles.main_logo} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EnterPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
});
