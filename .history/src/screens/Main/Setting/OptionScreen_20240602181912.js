import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const OptionScreen = () => {
  const width = Dimensions.get("window").width;
  const helpOptions = ["Về chúng tôi", "Câu hỏi thường gặp", "Liên hệ hổ trợ", "Điều khoản dịch vụ", "Xử lý sự cố ", "Xóa tài khoản", "Tình trạng dịch vụ"]
  return (
    <View style={styles.container}>
    </View>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})