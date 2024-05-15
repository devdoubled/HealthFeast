import React from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../../components/Auth/CustomButton";

const GetCodeScreen = () => {
  const { width } = Dimensions.get("window");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Nhập mã xác nhận</Text>
      </View>
      <View style={styles.code_container}>
        <View style={styles.code_text}>
          <Text style={styles.code_text_detail}>
            Gửi đến duyledl2002@gmail.com
          </Text>
          <Text style={styles.code_text_detail}>Mã CODE. Nhập tại đây:</Text>
        </View>
        <View style={styles.enterCode}>
          <TextInput
            style={styles.input_email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
      </View>
      <View
        style={[
          styles.action_container,
          { width: Dimensions.get("window").width - 50 },
        ]}
      >
        <CustomButton text="Nhập mã" style={styles.enterCode_btn} />
        <CustomButton text="Gửi lại mã" style={styles.resendCode_btn} />
      </View>
    </Key>
  );
};

export default GetCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#ffffff",
  },
  top_container: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 26,
    color: "#000000",
  },
  code_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  code_text: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  code_text_detail: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
  },
  action_container: {
    marginHorizontal: 25,
  },
  enterCode_btn: {
    marginBottom: 10,
  },
  resendCode_btn: {
    backgroundColor: "#464646",
  },
  input_email: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#F3F2F1",
  },
});
