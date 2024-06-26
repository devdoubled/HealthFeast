import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';

const SecurityScreen = () => {
  const width = Dimensions.get("window").width;
  const securityOptions = ["Điều khoản", "Chính sách bảo mật", "Cá nhân hóa", "Chia sẻ & cài đặt cá nhân", "Liên hệ hổ trợ", "Đổi mật khẩu"]
  return (
    <View style={styles.container}>
      <View style={[styles.security_container, { width: width - 32 }]}>
        <View style={styles.security_icon}>
        <MaterialIcons name="security" size={50} color="#9ABF5A" />
        </View>
        {securityOptions.map((option, index) => (
          <View style={styles.security_option} key={index}>
          <Text style={styles.security_text}>{option}</Text>
        </View>
        ))}
      </View>
    </View>
  )
}

export default SecurityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  security_container: {
    marginHorizontal: 16,
    marginTop: 20
  },
  security_icon: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  security_option: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#9ABF5A"
  },
  security_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  }
})