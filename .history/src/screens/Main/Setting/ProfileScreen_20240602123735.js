import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, View } from 'react-native';

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
    marginHorizontal: 16
  }
})