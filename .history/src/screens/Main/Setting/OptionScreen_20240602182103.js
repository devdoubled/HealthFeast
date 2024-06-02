import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const OptionScreen = () => {
  const width = Dimensions.get("window").width;
  const options = ["Hồ sơ", "Cài đặt hằng ngày", "Giao diện ứng dụng", "Chia sẻ & bảo mặt", "Cài đặt thông báo", "Cài đặt dinh dưỡng hàng tuần", "Đăng xuất"]
  return (
    <View style={styles.container}>
      <View style={[styles.option_container, { width: width - 32 }]}>
        <View style={styles.option_icon}>
        <Ionicons name="options-sharp" size={50} color="#9ABF5A" />,
        </View>
        {options.map((option, index) => (
          <View style={styles.option_option} key={index}>
            <Text style={styles.option_text}>{option}</Text>
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