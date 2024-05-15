import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const NotifyButton = ({onPress}) => {
  return (
    <Pressable onPress={}>
      <Image
        source={require("../../assets/images/notify_icon.png")}
        style={styles.image_icon}
      />
    </Pressable>
  );
};

export default NotifyButton;

const styles = StyleSheet.create({
    image_icon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        marginRight: 8,
        marginLeft: 8,
      }
});
