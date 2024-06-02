import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const HelpScreen = () => {
  const width = Dimensions.get("window").width;
  const helpOptions = ["Về chúng tôi", "Câu hỏi thường gặp", "Liên hệ hổ trợ", "Điều khoản dịch vụ", "Xử lý sự cố ", "Xóa tài khoản", "Tình trạng dịch vụ"]

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

export default HelpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})