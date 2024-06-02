import React from "react";
import { Modal, Pressable, StyleSheet, View, Dimensions } from "react-native";

const ModalEditBMI = ({ visible, handleCloseModal }) => {
  const width = Dimensions.get("window").width;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <Pressable style={styles.modalContainer} onPress={handleCloseModal}>
        <View
          style={styles.modalContent}
          onStartShouldSetResponder={() => true}
        ></View>
      </Pressable>
    </Modal>
  );
};

export default ModalEditBMI;

const styles = StyleSheet.create({
  modalContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    borderRadius: 20,
    backgroundColor: "#464646",
  },
});
