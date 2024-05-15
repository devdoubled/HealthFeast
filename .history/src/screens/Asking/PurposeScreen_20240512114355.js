import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PurposeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Mục đích của bạn là gì?</Text>
      <Text style={styles.sub_text}>Hiểu rõ mục đích của bạn sẽ giúp chúng tôi tạo kế hoạch cá nhân hóa cho bạn dễ dàng hơn</Text>
    </View>
  );
};

export default PurposeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  heading_text: {

  },
  sub_text: {
    
  }
});
