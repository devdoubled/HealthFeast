import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";
const PremiumScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo_img} />
      </View>
      <View style={[styles.premium_info, { width: width - 32 }]}>
        <Text style={styles.title}>“Giữ gìn sức khỏe, sống cuộc sống của bạn”</Text>
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
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
    color: "#000000",
  }
})