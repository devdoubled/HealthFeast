import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const OptionScreen = () => {
  const width = Dimensions.get("window").width;
  const helpOptions = ["Hồ sơ", "Cài đặt hằng ngày", "Giao diện ứng dụng", "Chia sẻ & bảo mặt", "Cài đặt thông báo", "Cài đặt dinh dưỡng hàng tuần", ""]
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