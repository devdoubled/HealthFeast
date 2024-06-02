import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const NotifyScreen = () => {
  const width = Dimensions.get("window").width;
  const options = ["Hồ sơ", "Cài đặt hằng ngày", "Giao diện ứng dụng", "Chia sẻ & bảo mặt", "Cài đặt thông báo", "Cài đặt dinh dưỡng hàng tuần", "Đăng xuất"]
  return (
    <View style={styles.container}>
    </View>
  )
}

export default NotifyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})