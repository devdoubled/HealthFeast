import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.history_container}>
      <View style={styles.history_icon}>
        <MaterialIcons name="history" size={50} color="#9ABF5A" />
      </View>
      <View style={styles.history_no_content}>
        <Text style={styles.history_no_title}>Chưa có dữ liệu</Text>
        <Text style={styles.history_no_desc}>Hãy nhớ ghi lại những gì bạn đã làm hôm nay nhé</Text>
      </View>
      </View>
      
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  history_container: {
    marginHorizontal: 16,
    marginTop: 20
  },
  history_icon: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  history_no_content: {
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  history_no_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  history_no_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#000000",
    paddingTop: 5,
  }
})