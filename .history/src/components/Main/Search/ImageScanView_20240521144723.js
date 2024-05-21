import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

const ImageScanView = ({ image }) => {
  return (
    <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
      </ImageBackground>
  )
}

export default ImageScanView

const styles = StyleSheet.create({
    image: {
        flex: 1,
      },
})