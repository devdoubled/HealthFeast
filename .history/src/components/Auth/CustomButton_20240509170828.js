import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.enterCode_btn,
        pressed && styles.btn_pressed,
      ]}
    >
      <Text style={styles.enterCode_text}>Nhập mã</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
