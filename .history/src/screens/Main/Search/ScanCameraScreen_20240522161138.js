import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
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

  // const takePicture = async () => {
  //   if (cameraRef.current) {
  //     const photo = await cameraRef.current.takePictureAsync();
  //     setScanImage(photo.uri)
  //     setTimeout(() => setScanImage(photo.uri), 1500);
  //     setIsWatingScan(true);
  //     setTimeout(() => setIsWatingScan(false), 5000);
  //   }
  // };

  const callApiWithImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(
        'https://khang.systems/api/FoodScan/file',
        formData,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwiUm9sZUlkIjoiMyIsIkFjY291bnRJZCI6IjMiLCJuYmYiOjE3MTYzNjgwODIsImV4cCI6MTcxNjk3Mjg4MiwiaWF0IjoxNzE2MzY4MDgyfQ.9-RieqwUG1tUjaDwX5r6MOPalDpm37Em8h15hH3qRUNZfMlKyEKVrar2hV_552mZA7cRxhbDCmm2pq_tvyTQxw`, // Set Authorization header with token
          },
        }
      );

      const data = await response.data;
      console.log('API response:', data);
    } catch (error) {
      console.error('Error calling API:', error);
    } finally {
      setIsWaitingScan(false);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
        });

        const response = await fetch(photo.uri);
        const blob = await response.blob();

        setIsWaitingScan(true);
        callApiWithImage(blob); // Call API function with image Blob
      } catch (error) {
        console.error('Error taking picture:', error);
      } finally {
        setIsWaitingScan(false);
      }
    }
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
