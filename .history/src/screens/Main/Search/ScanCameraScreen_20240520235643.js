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
        {/* Top Borders */}
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        {/* Bottom Borders */}
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
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
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#FFFFFF',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderTopLeftRadius: 20,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 20,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderBottomLeftRadius: 20,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 20,
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
