import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ForgetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Nhập mật khẩu</Text>
        {showImage && <Image source={MainLogo} style={styles.main_logo} />}
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({});
