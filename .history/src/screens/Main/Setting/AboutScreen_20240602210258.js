import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import Logo from "../../../assets/images/logo.png"

const AboutScreen = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})