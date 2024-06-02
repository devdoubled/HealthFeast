import React from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserAvt from "../../../assets/images/user_avt.png";
const SettingScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.more_header, { width : width - 48 }]}>
        <View style={styles.streak}>
          <Text style={styles.streak_title}>Tích lũy</Text>
          <Text style={styles.streak_count}>1</Text>
          <Text style={styles.streak_desc}>Ngày</Text>
        </View>
        <View style={styles.user}>
          <Image source={UserAvt} style={styles.user_avt}/>
          <Text styles={styles.user_name}>Dev DoubleD</Text>
        </View>
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
    marginHorizontal: 24,
    marginTop: 15,
  },
  streak: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  streak_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#000000",
  },
  streak_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    color: "#000000",
    paddingVertical: 2,
  },
  streak_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#B4B4B4",
  },
  user: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user_avt: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 
  }
})