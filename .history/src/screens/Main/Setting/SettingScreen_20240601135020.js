import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';

const SettingScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.more_header, { width : width - 32 }]}>
        <View style={styles.streak}>
          <Text style={styles.streak_title}>Tích lũy</Text>
          <Text style={styles.streak_count}>1</Text>
          <Text style={styles.streak_desc}>Ngày</Text>
        </View>
        <View style={styles.user}></View>
        <View style={styles.progress}></View>
      </View>
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
  more_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  streak: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  streak_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#000000",
  },
  streak_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#000000",
  }
})