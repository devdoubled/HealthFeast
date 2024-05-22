import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageScanView from "../../../components/Main/Search/ImageScanView";
import WatingScan from "../../../components/Main/Search/WatingScan";
const ScanCameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState(false);
  const [scanImage, setScanImage] = useState(null);
  const [isWatingScan, setIsWatingScan] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Allow" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setScanImage(photo.uri)
      await processImage(photo);
      // setTimeout(() => setScanImage(photo.uri), 1500);
      // setIsWatingScan(true);
      // setTimeout(() => setIsWatingScan(false), 5000);
    }
  };

  const processImage = async (photo) => {
    const data = new FormData();
    data.append('file', {
      uri: photo.uri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });
    console.log(data);
    // try {
    //   const response = await axios.post('https://khang.systems/api/FoodScan/file', data, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });

    //   console.log(response.data);
    //   // Handle the response as needed
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    // }
  };

  const goBackPrevScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {isWatingScan ? (
        scanImage ? (
          <WatingScan image={scanImage} goBackPrevScreen={goBackPrevScreen}/>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#9ABF5A" />
          </View>
        )
      ) : scanImage ? (
        <ImageScanView image={scanImage} goBackPrevScreen={goBackPrevScreen}/>
      ) : (
        <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
          <Pressable
            style={styles.back_container}
            onPress={goBackPrevScreen}
          >
            <Ionicons name="chevron-back" size={26} color="white" />
          </Pressable>
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
              <MaterialCommunityIcons
                name="line-scan"
                size={40}
                color="black"
              />
            </Pressable>
          </View>
        </CameraView>
      )}
    </View>
  );
};

export default ScanCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  back_container: {
    top: 55,
    left: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1
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
