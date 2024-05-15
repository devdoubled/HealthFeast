import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const PurposeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Mục đích của bạn là gì?</Text>
      <Text style={styles.sub_text}>
        Hiểu rõ mục đích của bạn sẽ giúp chúng tôi tạo kế hoạch cá nhân hóa cho
        bạn dễ dàng hơn
      </Text>
      <View style={[styles.purpose_container, { width: width - 70 }]}>
        <View style={styles.lose_weight}></View>
        <View style={styles.gain_weight}></View>
        <View style={styles.keep_weight}></View>
      </View>
      <View style={styles.action_container}></View>
    </View>
  );
};

export default PurposeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 35,
    marginTop: 20,
  },
  heading_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
  },
  purpose_container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lose_weight: {
    flex: 1,
    height: 120,
    backgroundColor: "red",
    marginRight: 15,
  },
  gain_weight: {
    flex: 1,
    height: 120,
    backgroundColor: "yellow",
    marginRight: 15,
  },
  keep_weight: {
    flex: 1,
    height: 120,
    backgroundColor: "green",
  },
});
