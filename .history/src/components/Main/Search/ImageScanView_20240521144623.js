import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageScanView = () => {
  return (
    <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
      </ImageBackground>
  )
}

export default ImageScanView

const styles = StyleSheet.create({})