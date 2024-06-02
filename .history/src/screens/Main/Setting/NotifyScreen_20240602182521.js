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
      name: "Nhận thông báo",
      isCheck: true,
    },
    {
      id: 5,
      name: "Nhận thông báo",
      isCheck: true,
    },
    {
      id: 6,
      name: "Nhận thông báo",
      isCheck: true,
    },
    {
      id: 7,
      name: "Nhận thông báo",
      isCheck: true,
    },
    {
      id: 8,
      name: "Nhận thông báo",
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