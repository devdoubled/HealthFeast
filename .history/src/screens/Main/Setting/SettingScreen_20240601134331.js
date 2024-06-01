import React from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'

const SettingScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.more_header}></View>
    </ScrollView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})