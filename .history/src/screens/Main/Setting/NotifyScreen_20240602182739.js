import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

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
})