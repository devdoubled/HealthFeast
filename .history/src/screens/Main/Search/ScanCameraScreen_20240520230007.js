import { CameraView } from "expo-camera";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ScanCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  return (
    <View style={styles.container}>
    </View>
  );
};

export default ScanCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
