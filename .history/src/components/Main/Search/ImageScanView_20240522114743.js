import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
const ImageScanView = ({ image, goBackPrevScreen }) => {
  return (
    <ImageBackground source={{ uri: image }} style={styles.image_container} imageStyle={styles.image}>
      <Pressable style={styles.back_container} onPress={goBackPrevScreen}>
        <Ionicons name="chevron-back" size={26} color="white" />
      </Pressable>
      <View style={styles.scan_result_container}></View>
    </ImageBackground>
  );
};

export default ImageScanView;

const styles = StyleSheet.create({
  image_container: {
    flex: 1,
    position: "relative",
  },
  back_container: {
    top: 55,
    left: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
  image: {
    height: 550,
    resizeMode: "cover"
  },
  scan_result_container: {
    position: "absolute",
    height: 350,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "red",
  }
});
