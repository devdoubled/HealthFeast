import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import React from 'react'

const NotifyScreen = () => {
  const width = Dimensions.get("window").width;
  const options = [
    {
      id: 1,
      name: "",
      status
    }
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