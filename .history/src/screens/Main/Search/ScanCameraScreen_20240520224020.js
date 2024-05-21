import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
const ScanCameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  return (
    <View>
      <Text>ScanCameraScreen</Text>
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})