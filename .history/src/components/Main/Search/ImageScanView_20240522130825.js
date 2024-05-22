import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NutritionProgress from "./NutritionProgress";
const ImageScanView = ({ image, goBackPrevScreen }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.image_container}
      imageStyle={styles.image}
    >
      <Pressable style={styles.back_container} onPress={goBackPrevScreen}>
        <Ionicons name="chevron-back" size={26} color="white" />
      </Pressable>
      <View style={styles.scan_result_container}>
        <View style={styles.rusult_title}>
          <Text style={styles.title_desc}>Báo cáo thức ăn</Text>
          <Text style={styles.title}>Mì quảng</Text>
        </View>
        <View style={styles.result_calo}>
          <Text style={styles.calo_title}>Tổng lượng calo</Text>
          <Text style={styles.calo_number}>400 kCal</Text>
        </View>
        <View style={styles.result_nutrition}>
          <Text style={styles.nutrition_title}>Thành phần dinh dưỡng</Text>
          <View style={styles.nutrition_container}>
            <NutritionProgress
              label="Tinh bột"
              color="#9ABF5A"
              nutrition={68}
              target={100}
            />
            <NutritionProgress
              label="Đạm"
              color="#E55733"
              nutrition={22.4}
              target={100}
              isMiddle={true}
            />
            <NutritionProgress
              label="Béo"
              color="#FFC700"
              nutrition={20.2}
              target={100}
            />
          </View>
        </View>
        <Pressable style={({pressed}) => [styles.add_meal_btn, pressed && styles.pressed]}>
          <Text style={styles.add_meal_text}>Thêm vào bữa ăn</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Thêm vào bữa ăn thành công!</Text>
            <Pressable
              style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ImageScanView;

const styles = StyleSheet.create({
  image_container: {
    flex: 1,
    position: "relative",
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
  image: {
    height: 550,
    resizeMode: "cover",
  },
  scan_result_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  rusult_title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title_desc: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    color: "#B4B4B4",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#000000",
    marginTop: 3,
  },
  result_calo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  calo_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  calo_number: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  result_nutrition: {
    marginTop: 15,
  },
  nutrition_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  nutrition_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  add_meal_btn: {
    marginTop: 15,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#464646"
  },
  add_meal_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#9ABF5A",
  },
  pressed: {
    opacity: 0.9
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#000000",
    marginBottom: 15,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#9ABF5A",
  },
  closeButtonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  }
});
