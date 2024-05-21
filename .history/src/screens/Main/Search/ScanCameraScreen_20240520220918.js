import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useCameraDevices } from 'react-native-vision-camera';
const ScanCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})