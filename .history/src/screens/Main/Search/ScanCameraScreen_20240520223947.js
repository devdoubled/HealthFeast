import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
const ScanCameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})