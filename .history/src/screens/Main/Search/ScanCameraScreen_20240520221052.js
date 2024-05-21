import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import { useAppState } from '@react-native-community/hooks';
const ScanCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})