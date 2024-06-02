import React from 'react'
import { Platform, StyleSheet, View, Dimensions, Text } from 'react-native'

const SecurityScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.security_container, { width: width - 32 }]}>
        <View style={styles.security_option}>
          <Text style={styles.security_text}></Text>
        </View>
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
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#9ABF5A"
  }
})