import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const WatingScan = ({image}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            {/* <Animated.View
              style={[
                styles.scanLineContainer,
                { transform: [{ translateY }] },
              ]}
            >
              <LinearGradient
                colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0)"]}
                style={styles.scanLineContainer}
              >
                <View style={styles.scanLine} />
              </LinearGradient>
            </Animated.View> */}
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
        </View>
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