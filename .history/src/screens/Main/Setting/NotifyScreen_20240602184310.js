import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';

const NotifyScreen = () => {
  const width = Dimensions.get("window").width;
  const notifyOptions = [
    {
      id: 1,
      name: "Nhận thông báo",
      isCheck: true,
    },
    {
      id: 2,
      name: "Nhận lời mời kết bạn",
      isCheck: true,
    },
    {
      id: 3,
      name: "Cho phép người khác bình luận",
      isCheck: false,
    },
    {
      id: 4,
      name: "Cho phép người khác thích bài viết",
      isCheck: true,
    },
    {
      id: 5,
      name: "Cho phép người khác ghi lại bài tập",
      isCheck: false,
    },
    {
      id: 6,
      name: "Cho phép bạn bè bình luận",
      isCheck: true,
    },
    {
      id: 7,
      name: "Cho phép bạn bè thích bài viết",
      isCheck: false,
    },
    {
      id: 8,
      name: "Cho phép bạn bè ghi lại bài tập luyện",
      isCheck: false,
    },
  ]
  return (
    <View style={styles.container}>
      <View style={[styles.notify_container, { width: width - 32 }]}>
        <View style={styles.notify_icon}>
          <FontAwesome6 name="bell" size={50} color="#9ABF5A" />
        </View>
        {notifyOptions.map((option) => (
          <View style={styles.notify_option} key={option.id}>
            {option.isCheck ? <AntDesign name="checkcircle" size={24} color="#9ABF5A" /> : <AntDesign name="checkcircle" size={24} color="#B4B4B4" />}
            <Text style={styles.notify_text}>{option.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default NotifyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  notify_container: {
    marginHorizontal: 16,
    marginTop: 20
  },
  notify_icon: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  notify_option: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#9ABF5A"
  },
  notify_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 5,
  }
})