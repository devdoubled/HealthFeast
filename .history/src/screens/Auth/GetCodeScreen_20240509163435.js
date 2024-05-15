import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GetCodeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Đăng Ký</Text>
      </View>
    </View>
  );
};

export default GetCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
});
