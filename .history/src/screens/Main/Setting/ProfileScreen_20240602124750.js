import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import UserAvt from "../../../assets/images/user_default.png";
const ProfileScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.avatar_container, { width: width - 32 }]}>
        <Image source={UserAvt} style={styles.avatar}/>
      </View>
      <View style={[styles.profile_info, { width: width - 32 }]}>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Tên người dùng</Text>
          <Text style={styles.user_name_info}>DevDoubleD</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Tên người dùng</Text>
          <Text style={styles.user_name_info}>DevDoubleD</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  avatar_container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "cover"
  },
  profile_info: {
    marginHorizontal: 16
  },
  user_name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#9ABF5A",
  },
  user_name_title: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#000000",
  },
  user_name_info: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#9ABF5A",
  },
})