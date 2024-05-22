import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
const ImageScanView = ({ image, goBackPrevScreen }) => {
  return (
    <ImageBackground source={{ uri: image }} style={styles.image_container} imageStyle={styles.image}>
      <Pressable style={styles.back_container} onPress={goBackPrevScreen}>
        <Ionicons name="chevron-back" size={26} color="white" />
      </Pressable>
      <View style={styles.scan_result_container}>
        <View style={styles.rusult_title}>
          <Text style={styles.title_desc}>Báo cáo thức ăn</Text>
          <Text style={styles.title}>Mì quảng</Text>
        </View>
        <View style={styles.result_calo}>
          <Text style={styles.calo_title}>Tổng lượng calo</Text>
          <Text style={styles.calo_number}>400 kCal</Text>
        </View>
      </View>
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
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  rusult_title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title_desc: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: "#B4B4B4"
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#000000",
    marginTop: 3
  },
  result_calo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  calo_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "#000000",
  },
  
});
