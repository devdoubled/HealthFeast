import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import Logo from "../../../assets/images/logo.png"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.version}>Version 24.0.2.02.024</Text>
      <View style={styles.about_container}>
        <Text style={styles.about_text}>Healthfeast là một ứng dụng giúp đo đạt, hướng dẫn, lưu trữ dành cho những người quan tâm đến bữa ăn, sức khỏe và thể hình ở Việt Nam.</Text>
      </View>
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
    fontSize: 12,
    color: "#000000",
    textAlign: ""
  }
})