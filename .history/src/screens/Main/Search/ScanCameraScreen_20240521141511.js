import { useCameraPermissions } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View
} from "react-native";
const ScanCameraScreen = () => {
  const cameraRef = useRef();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanImage]
  const [isWatingScan, setIsWatingScan] = useState(false)


  if (!permission) {
    return <View />;
  }

  useEffect(() => {
    if (permission && !permission.granted) {
      Alert.alert(
        "Permission Required",
        "We need your permission to show the camera",
        [
          {
            text: "Allow",
            onPress: requestPermission,
          },
        ],
        { cancelable: false }
      );
    }
  }, [permission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={takePicture}
          >
            <MaterialCommunityIcons name="line-scan" size={40} color="black" />
          </Pressable>
        </View>
      </CameraView> */}
      {/* <WatingScan image={"https://i-giadinh.vnecdn.net/2022/10/07/-1238-1665132014.jpg"}/> */}
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 350,
    height: 400,
    position: "relative",
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  corner: {
    position: "absolute",
    width: 55,
    height: 55,
    borderColor: "#FFFFFF",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  button: {
    width: 90,
    height: 90,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
