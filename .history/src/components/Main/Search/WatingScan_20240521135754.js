import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const WatingScan = ({image}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    </View>
  )
}

export default WatingScan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
      },
      image: {
        flex: 1,

      }
})