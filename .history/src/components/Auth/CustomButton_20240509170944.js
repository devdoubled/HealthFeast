import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({ text, color }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && styles.btn_pressed,
        color,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#9ABF5A",
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
