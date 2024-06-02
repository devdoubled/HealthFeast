import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const OptionScreen = () => {
  const width = Dimensions.get("window").width;
  const options = ["Hồ sơ", "Cài đặt hằng ngày", "Giao diện ứng dụng", "Chia sẻ & bảo mặt", "Cài đặt thông báo", "Cài đặt dinh dưỡng hàng tuần", "Đăng xuất"]
  return (
    <View style={styles.container}>
      <View style={[styles.help_container, { width: width - 32 }]}>
        <View style={styles.help_icon}>
          <MaterialIcons name="help-outline" size={50} color="#9ABF5A" />
        </View>
        {helpOptions.map((option, index) => (
          <View style={styles.help_option} key={index}>
            <Text style={styles.help_text}>{option}</Text>
          </View>
        ))}
      </View>
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