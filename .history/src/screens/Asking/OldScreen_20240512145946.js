import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
const OldScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Chiều cao của bạn?</Text>
      <Text style={styles.sub_text}>
        Chiều cao cũng cần thiết để tính toán lượng calo và macro hoàn hảo của
        bạn
      </Text>
      <View style={[styles.action_container, { width: width - 70 }]}>
        <CustomButton text="Tiếp tục" />
      </View>
    </View>
  );
};

export default OldScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 30,
    marginTop: 50,
  },
  heading_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    textAlign: "center",
  },
  sub_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
    lineHeight: 20,
  },
  action_container: {
    position: "absolute",
    bottom: 40,
  },
});
