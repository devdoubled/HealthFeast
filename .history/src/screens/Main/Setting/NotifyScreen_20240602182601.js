import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import React from 'react'

const NotifyScreen = () => {
  const width = Dimensions.get("window").width;
  const options = [
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
      isCheck: true,
    },
    {
      id: 4,
      name: "Cho phép người khác thích bài viết",
      isCheck: true,
    },
    {
      id: 5,
      name: "Cho phép người khác ghi lại bài tập",
      isCheck: true,
    },
    {
      id: 6,
      name: "Cho phép bạn bè bình luận",
      isCheck: true,
    },
    {
      id: 7,
      name: "Cho phép bạn bè thích bài viết",
      isCheck: true,
    },
    {
      id: 8,
      name: "Cho phép bạn bè ghi lại bài tập luyện",
      isCheck: true,
    },
  ]
  return (
    <View style={styles.container}>
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