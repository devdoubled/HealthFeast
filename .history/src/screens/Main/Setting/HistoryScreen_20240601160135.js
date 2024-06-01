import React from 'react'
import { Platform, StyleSheet, View, Text } from 'react-native'

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.history_no_title}>Chưa có dữ liệu</Text>
      <Text style={styles.history_no_desc}>Hãy nhớ ghi lại những gì bạn đã làm hôm nay nhé</Text>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  history_no_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  }
})