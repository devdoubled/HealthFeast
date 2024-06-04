import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const PremiumScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo_img} />
      </View>
      <View style={[styles.premium_info, { width: width - 32 }]}>
        <Text style={styles.title}>“Giữ gìn sức khỏe, sống cuộc sống của bạn”</Text>
        <Text style={styles.desc}>Các thành viên có khả năng đạt được thành quả và mục tiêu có tỉ lệ cao hơn tới <Text style={styles.highlight}>60%</Text> so với trước.</Text>
        <View style={styles.func_list}>
          <View style={styles.func}>
            <MaterialCommunityIcons name="star-plus-outline" size={28} color="#F5CF46" />
            <Text style={styles.}></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PremiumScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  logo_img: {
    width: 100,
    height: 100
  },
  premium_info: {
    marginHorizontal: 16
  },
  title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
    color: "#000000",
  },
  desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    lineHeight: 20,
    marginTop: 8,
  },
  highlight: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#000000",
  }
})