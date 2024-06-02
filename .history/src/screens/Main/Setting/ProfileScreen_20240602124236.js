import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, View, Text } from 'react-native';
import UserAvt from "../../../assets/images/user_default.png";
const ProfileScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.avatar_container, { width: width - 32 }]}>
        <Image source={UserAvt} style={styles.avatar}/>
      </View>
      <View style={[styles.profile_info, { width: width - 32 }]}>
        <View style={styles.user_name}>
          <Text></Text>
          <Text></Text>
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
    
  }
})