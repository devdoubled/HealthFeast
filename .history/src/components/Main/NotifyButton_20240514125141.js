import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotifyButton = () => {
  return (
    <Pressable>
      <Image
        source={require("../../assets/images/notify_icon.png")}
        style={styles.image_icon}
      />
    </Pressable>
  );
};

export default NotifyButton;

const styles = StyleSheet.create({});
