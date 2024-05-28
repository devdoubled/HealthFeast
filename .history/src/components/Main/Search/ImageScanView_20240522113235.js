import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Pressable, StyleSheet } from "react-native";
const ImageScanView = ({ image, goBackPrevScreen }) => {
  return (
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <Pressable style={styles.back_container} onPress={goBackPrevScreen}>
        <Ionicons name="chevron-back" size={26} color="white" />
      </Pressable>
      <ImageBackground>
        
      </ImageBackground>
    </ImageBackground>
  );
};

export default ImageScanView;

const styles = StyleSheet.create({
  image: {
    flex: 1,
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
});