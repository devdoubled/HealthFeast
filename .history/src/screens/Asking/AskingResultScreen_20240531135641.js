import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ResultImg from "../../assets/images/result_img.png";
const AskingResultScreen = () => {
    const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.reult_title}>Dữ liệu của bạn</Text>
      <Image source={ResultImg} style={styles.result_img} />
      <ScrollView
        style={[styles.result_info, {width: width - 32}]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.result_item}></View>
      </ScrollView>
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
    marginHorizontal: 16,
  },
  result_img: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  result_info: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  result_item: {
    width: "100%",
    
  }
});
