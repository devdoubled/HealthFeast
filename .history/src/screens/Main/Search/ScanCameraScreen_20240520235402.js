import { FontAwesome5 } from "@expo/vector-icons";
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
        <View style={styles.scanFrame}>
          <View style={[styles.border, styles.topLeft]} />
          <View style={[styles.border, styles.topRight]} />
          <View style={[styles.border, styles.bottomLeft]} />
          <View style={[styles.border, styles.bottomRight]} />
        </View>
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
  scanFrame: {
    width: 300,
    height: 300,
    position: "relative",
    borderWidth: 1,
    borderColor: "transparent",
  },
  border: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: "#00FF00",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
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
});
