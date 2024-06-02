import React from 'react'
import { Platform, StyleSheet, View, Image } from 'react-native'
import Logo from "../../../assets/images/logo.png"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    just
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})