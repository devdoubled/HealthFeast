import React from 'react'
import { Image, Platform, StyleSheet, View } from 'react-native'
import Logo from "../../../assets/images/main-logo.png"
const PremiumScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo_img}/>
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
    justifyContent: "center"
  },
  logo_img: {
    width: 100,
    height: 100
  }
})