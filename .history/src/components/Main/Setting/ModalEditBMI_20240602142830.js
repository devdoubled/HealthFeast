import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ModalEditBMI = ({ visible, handleCloseModal }) => {
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
        >
          <View style={styles.line_container}>
            <View style={styles.line}></View>
          </View>
          <View style={styles.nav_list}>
            <Pressable style={styles.nav_item}>
              <Text style={styles.nav_text}>Chiều cao</Text>
            </Pressable>
            <Pressable style={styles.nav_item}>
              <Text style={styles.nav_text}>Câng nặng</Text>
            </Pressable>
          </View>
        </View>
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
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 520,
    borderRadius: 30,
    backgroundColor: "#2E2E2E",
  },
  line_container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  line: {
    width: 120,
    height: 3,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  nav_list: {
    flexDirection: "row",
    alignItems: "center",
  },
  nav_item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: "#B4B4B4",
  },
  nav_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#B4B4B4",
  },
});
