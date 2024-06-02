import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';

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
  option_container: {
    marginHorizontal: 16,
    marginTop: 20
  },
  option_icon: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  option_option: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#9ABF5A"
  },
  option_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  }
})