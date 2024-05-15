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
      <View style={[styles.action_container, { width }]}>
        <Pressable
          style={({ pressed }) => [
            styles.enterCode_btn,
            pressed && styles.btn_pressed,
          ]}
        >
          <Text style={styles.enterCode_text}>Nhập mã</Text>
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
    width: "100%",
    marginHorizontal: 25,
  },
  enterCode_btn: {
    width: "100"
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
});
