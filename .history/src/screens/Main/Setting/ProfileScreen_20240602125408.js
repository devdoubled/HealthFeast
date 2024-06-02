import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View, Pressable } from 'react-native';
import UserAvt from "../../../assets/images/user_default.png";
import { FontAwesome } from '@expo/vector-icons';
const ProfileScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.avatar_container, { width: width - 32 }]}>
        <Image source={UserAvt} style={styles.avatar}/>
        <Pressable></Pressable>
      </View>
      <View style={[styles.profile_info, { width: width - 32 }]}>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Tên người dùng</Text>
          <Text style={styles.user_name_info}>DevDoubleD</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Cập nhật BMI</Text>
          <Text style={styles.user_name_info}>Chiều cao/Cân nặng</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Ngày sinh</Text>
          <Text style={styles.user_name_info}>19/9/2002</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Giới tính</Text>
          <Text style={styles.user_name_info}>Name</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Email</Text>
          <Text style={styles.user_name_info}>tholee123@gmail.com</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Vị trí</Text>
          <Text style={styles.user_name_info}>Vietnam</Text>
        </View>
        <View style={styles.user_info}>
          <Text style={styles.user_name_title}>Múi giờ</Text>
          <Text style={styles.user_name_info}>Indochina Time (Hanoi)</Text>
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
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: "cover"
  },
  profile_info: {
    marginHorizontal: 16
  },
  user_info: {
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