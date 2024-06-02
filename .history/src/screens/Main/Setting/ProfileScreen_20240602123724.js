import { StyleSheet, Image, View, Platform, Dimensions } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.avatar_container, { width: width - 32}]}>
        <Image style={styles.avatar}/>
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

  }
})