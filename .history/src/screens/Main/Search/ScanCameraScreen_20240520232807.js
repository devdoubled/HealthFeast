import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ScanCameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef()
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Here you can handle the captured photo as needed
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default ScanCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
