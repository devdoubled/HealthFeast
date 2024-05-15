import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GetCodeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Nhập mã xác nhận</Text>
      </View>
      <View style={styles.code_container}>
        <View style={styles.code_text}>
          <Text>Gửi đến duyledl2002@gmail.com</Text>
          <Text>Mã CODE. Nhập tại đây:</Text>
        </View>
      </View>
      <View style={styles.action_container}>
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
  code_container: {},
  code_text: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  action_container: {},
});
