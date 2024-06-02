import React from 'react'
import { Image, Platform, StyleSheet, View, Text } from 'react-native'
import Logo from "../../../assets/images/logo.png"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.version}>Version 24.0.2.02.024</Text>
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
  logo: {

  },
  version: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#000000",
  }
})