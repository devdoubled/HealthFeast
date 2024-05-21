import { FontAwesome5 } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const ScanCameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
          <FontAwesome5 name="camera" size={50} color="white" />
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
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
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
    // alignSelf: "flex-end",
    alignItems: "center",
  },
});
