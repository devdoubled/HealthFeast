import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'

const SecurityScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.security_container, { width: width - 32 }]}>
        <View style={styles.security_option}></View>
      </View>
    </View>
  )
}

export default SecurityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  security_container: {
    marginHorizontal: 16,
    marginTop: 20
  },
  security_option: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#"
  }
})