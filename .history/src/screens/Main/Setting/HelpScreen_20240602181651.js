import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const HelpScreen = () => {
  const width = Dimensions.get("window").width;
  const helpOptions = ["Về chúng tôi", "Câu hỏi thường gặp", "Liên hệ hổ trợ", "Điều khoản dịch vụ", "Xử lý sự cố ", "Xóa tài khoản"]

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