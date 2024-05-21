import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import { useAppState } from '@react-native-community/hooks';
const ScanCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'authorized');
    })();
  }, []);

  if (device == null) return <Text>Loading...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;

  return (
    <View>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
      />
    </View>
  )
}

export default ScanCameraScreen

const styles = StyleSheet.create({})