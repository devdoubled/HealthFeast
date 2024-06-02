import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ResultImg from "../../assets/images/welcome_img.png";
const AskingResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.reult_title}>Dữ liệu của bạn</Text>
      <Image source={ResultImg} style={styles.result_img}/>
    </View>
  );
};

export default AskingResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: "#ffffff",
  },
  reult_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24,
    color: "#000000",
    marginHorizontal: 16
  },
  result_img: {
    marginHorizontal: 16,
    marginTop: 10
  }
});