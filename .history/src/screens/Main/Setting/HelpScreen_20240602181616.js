import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const HelpScreen = () => {
  const width = Dimensions.get("window").width;
  const helpOptions = ["Điều khoản", "Chính sách bảo mật", "Cá nhân hóa", "Chia sẻ & cài đặt cá nhân", "Liên hệ hổ trợ", "Đổi mật khẩu"]

  return (
    <View style={styles.container}>
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