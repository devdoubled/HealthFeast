import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <ScrollView style={styles.container}>
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