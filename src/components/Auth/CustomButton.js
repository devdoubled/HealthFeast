import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({ onPress, style, text, disabled, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && styles.btn_pressed,
        disabled && styles.btn_disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#9ABF5A",
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#ffffff",
  },
  btn_pressed: {
    opacity: 0.9,
  },
  btn_disabled: {
    backgroundColor: "rgba(154, 191, 90, 0.2)",
  },
});
