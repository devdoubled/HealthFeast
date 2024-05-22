import React from "react";
import { Modal, StyleSheet, Text, View, Pressable, Image } from "react-native";
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
          <View style={styles.modal_title}>
            <Image source={ModalAddImg} style={styles.modal_img}/>
            <Text style={styles.modal_text}>Thêm vào bữa ăn bạn muôn<Text/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddMeal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#464646",
    borderRadius: 15,
    alignItems: "center",
  },
  modal_title: {
    flexDirection: "column",
    
  }
});
