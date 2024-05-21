import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
const [permission, requestPermission] = useCameraPermissions();
const ScanCameraScreen = () => {
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})