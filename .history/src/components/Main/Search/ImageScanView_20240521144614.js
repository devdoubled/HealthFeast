import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageScanView = () => {
  return (
    <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            <Animated.View
              style={[
                styles.scanLineContainer,
                { transform: [{ translateY }] },
              ]}
            >
              <LinearGradient
                colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0)"]}
                style={styles.scanLineContainer}
              >
                <View style={styles.scanLine} />
              </LinearGradient>
            </Animated.View>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
        </View>
      </ImageBackground>
  )
}

export default ImageScanView

const styles = StyleSheet.create({})