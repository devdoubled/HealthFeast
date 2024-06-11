import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import cloudinary from 'cloudinary';
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
import apiClient from './../../../services/apiService';

cloudinary.config({
  cloud_name: 'dc0y8lfi5',
  api_key: '525394679868554',
  api_secret: 'YjBlscDyaFkPOrtKE5GtHaB8O86Y',
});


const ScanCameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanImage, setScanImage] = useState(null);
  const [isWaitingScan, setIsWaitingScan] = useState(false);

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
      setTimeout(() => setScanImage(photo.uri), 1500);
      setIsWaitingScan(true);
      const imageLink = "https://www.recipetineats.com/wp-content/uploads/2024/03/Crispy-pork-belly-banh-mi_3.jpg"
      try {
        const result = await uploadImageForScan(imageLink);
        console.log(result)
      } catch (error) {
        console.error('Error scanning the image:', error);
      } finally {
        setIsWaitingScan(false);
      }
    }
  };

  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    data.append('file', {
      uri: imageUri,
      type: 'image/jpeg', // or your file type
      name: 'upload.jpg',
    });
    data.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // You need to create an upload preset in your Cloudinary settings

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      return result.secure_url; // This is the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  };

  const uploadImageForScan = async (imageLink) => {
    try {
      const response = await apiClient.post('/FoodScan/Link', imageLink);
      return response.data; 
    } catch (error) {
      console.error('Error uploading image for scan:', error);
      throw error;
    }
  };

  const goBackPrevScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {isWaitingScan ? (
        scanImage ? (
          <WatingScan image={scanImage} goBackPrevScreen={goBackPrevScreen} />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#9ABF5A" />
          </View>
        )
      ) : scanImage ? (
        <ImageScanView image={scanImage} goBackPrevScreen={goBackPrevScreen} />
      ) : (
        <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
          <Pressable style={styles.back_container} onPress={goBackPrevScreen}>
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
    zIndex: 1,
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
