import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import ModalAddImg from "../../../assets/images/modal_add.png";
const ModalAddMeal = ({ visible, handleCloseModal }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable style={styles.close_icon} onPress={handleCloseModal}>
          <AntDesign
            name="closecircleo"
            size={26}
            color="white"
          />
          </Pressable>
          <View style={styles.modal_title}>
            <Image source={ModalAddImg} style={styles.modal_img} />
            <Text style={styles.modal_text}>Thêm vào bữa ăn bạn muốn</Text>
          </View>
          <View style={styles.choose_meal}>
            <Pressable style={styles.choose_btn}>
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
            <Pressable style={styles.choose_btn}>
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
            <Pressable style={styles.choose_btn}>
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
            <Pressable style={styles.choose_btn}>
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddMeal;

const styles = StyleSheet.create({
  modalContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    position: "absolute",
    bottom: 150,
    width: 350,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#464646",
    borderRadius: 15,
    alignItems: "center",
  },
  close_icon: {
    position: "absolute",
    top: 15,
    right: 20
  },
  modal_title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modal_img: {
    marginBottom: 5,
  },
  modal_text: {
    fontFamily: "Montserrat-Italic",
    fontSize: 20,
    color: "#FFFFFF",
  },
  choose_meal: {
    width: "100%",
    marginTop: 10,
  },
  choose_btn: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  choose_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#9ABF5A",
  },
});
