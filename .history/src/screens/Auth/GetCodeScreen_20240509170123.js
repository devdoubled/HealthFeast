import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const GetCodeScreen = () => {
  const { width } = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
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
      </View>
      {/* <View style={[styles.action_container, { width }]}>
        <Pressable
          style={({ pressed }) => [
            styles.enterCode_btn,
            pressed && styles.btn_pressed,
          ]}
        >
          <Text style={styles.enterCode_text}>Nhập mã</Text>
        </Pressable>
      </View> */}
      <View style={[styles.input_container, { width }]}>
        <Pressable
          style={({ pressed }) => [
            styles.getCode_btn,
            pressed && styles.getCode_btn_pressed,
          ]}
          onPress={handlePressGetCode}
        >
          <Text style={styles.getCode_text}>Lấy mã</Text>
        </Pressable>
      </View>
    </View>
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
    marginTop: 10,
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
    height: 44,
    backgroundColor: "#9ABF5A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  enterCode_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  btn_pressed: {
    opacity: 0.9,
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
  getCode_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  getCode_btn_pressed: {
    opacity: 0.9,
  },
});
