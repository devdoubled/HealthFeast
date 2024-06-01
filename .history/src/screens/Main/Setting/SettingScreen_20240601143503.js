import React from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import PurposeImg from "../../../assets/images/activity_less.png";
import UserAvt from "../../../assets/images/user_default.png";
const SettingScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.more_header, { width : width - 32}]}>
        <View style={styles.streak}>
          <Text style={styles.streak_title}>Tích lũy</Text>
          <Text style={styles.streak_count}>1</Text>
          <Text style={styles.streak_desc}>Ngày</Text>
        </View>
        <View style={styles.user}>
          <Image source={UserAvt} style={styles.user_avt}/>
          <Text style={styles.user_name}>Dev DoubleD</Text>
        </View>
        <View style={styles.progress}>
        <Text style={styles.progress_title}>Quá trình</Text>
          <Text style={styles.progress_count}>10</Text>
          <Text style={styles.progress_desc}>Giảm/ Kgs</Text>
        </View>
      </View>
      <View style={[styles.more_purpose, { width : width - 32}]}>
        <Image source={PurposeImg} style={styles.purpose_img}/>
        <View style={styles.purpose_info}>
          <Text style={styles.purpose_title}>Nhớ cập nhật BMI nhoé</Text>
          <Text style={styles.purpose_desc}>Cập nhật thường xuyên để có chỉ số chính xác.</Text>
        </View>
      </View>
      <View style={[styles.more_options_container, { width: width - 32 }]}>
        <View style={styles.option_container}>
          <View style={styles.option_content}>
            <View style={styles.option_img_container}>
              <Image style={styles.option_img}/>
            </View>
          </View>
        </View>
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
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 15,
  },
  streak: {
    width: 90,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  streak_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  streak_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  streak_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
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
    resizeMode: 'contain'
  },
  user_name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
    paddingTop: 5,
  },
  progress: {
    width: 90,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progress_title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
  },
  progress_count: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
  },
  progress_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#B4B4B4",
  },
  more_purpose: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 25,
  },
  purpose_img: {
    marginRight: 12,
    width: 50,
    height: 50
  },
  purpose_info: {
    flexDirection: "column",
  },
  purpose_title: {
    fontFamily: "Montserrat-Italic",
    fontSize: 24,
    color: "#000000",
  },
  purpose_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000000",
    paddingTop: 2,
  },
  more_options_container: {
    marginHorizontal: 16,
    marginTop: 25,
  }
})