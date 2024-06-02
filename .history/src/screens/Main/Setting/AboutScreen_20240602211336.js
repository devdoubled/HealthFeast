import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import Logo from "../../../assets/images/logo.png"
import { FontAwesome5 } from '@expo/vector-icons';
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.version}>Version 24.0.2.02.024</Text>
      <View style={styles.about_container}>
        <Text style={styles.about_text}>Healthfeast là một ứng dụng giúp đo đạt, hướng dẫn, lưu trữ dành cho những người quan tâm đến bữa ăn, sức khỏe và thể hình ở Việt Nam.</Text>
        <Text style={styles.about_text_1}>Mặc dù chưa có ứng dụng nào tính toán lượng calo phù hợp cho món ăn Việt Nam.</Text>
        <Text style={styles.about_text}> Để giải quyết vấn đề đó Healthfeast được tạo ra để phát triển tính năng quét món ăn Việt Nam, xác định lượng calo và phát triển tính năng gợi ý thực đơn hàng ngày, hàng tuần.</Text>
      </View>
      <View></>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  logo: {},
  version: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#000000",
    marginBottom: 15,
  },
  about_container: {
    marginHorizontal: 16
  },
  about_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 20,
  },
  about_text_1: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 20,
    marginVertical: 15,
  }
})