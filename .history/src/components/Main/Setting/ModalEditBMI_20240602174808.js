import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
const ModalEditBMI = ({ visible, handleCloseModal }) => {
  const [nav, setNav] = useState("Chiều cao");
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
            <Pressable
              style={
                nav === "Chiều cao" ? styles.nav_item_active : styles.nav_item
              }
              onPress={() => setNav("Chiều cao")}
            >
              <Text
                style={
                  nav === "Chiều cao" ? styles.nav_text_active : styles.nav_text
                }
              >
                Chiều cao
              </Text>
            </Pressable>
            <Pressable
              style={
                nav === "Câng nặng" ? styles.nav_item_active : styles.nav_item
              }
              onPress={() => setNav("Câng nặng")}
            >
              <Text
                style={
                  nav === "Câng nặng" ? styles.nav_text_active : styles.nav_text
                }
              >
                Câng nặng
              </Text>
            </Pressable>
          </View>
          {nav === "Chiều cao" ? (
            <View style={styles.edit_container}>
              <View style={styles.edit_content}>
                <Pressable style={({ pressed }) => [styles.minus_btn, pressed && styles.pressed]}>
                  <AntDesign name="minuscircle" size={28} color="white" />
                </Pressable>
                <Text style={styles.edit_text}>170</Text>
                <Pressable style={({ pressed }) => [styles.plus_btn, pressed && styles.pressed]}>
                  <AntDesign name="pluscircle" size={28} color="white" />
                </Pressable>
              </View>
              <Text style={styles.unit}>cm</Text>
              <Pressable style={({ pressed }) => [styles.edit_btn, pressed && styles.pressed]}>
                <Text style={styles.btn_text}>Cập nhật</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.edit_container}>
              <View style={styles.edit_content}>
                <Pressable style={({ pressed }) => [styles.minus_btn, pressed && styles.pressed]}>
                  <AntDesign name="minuscircle" size={28} color="white" />
                </Pressable>
                <Text style={styles.edit_text}>70</Text>
                <Pressable style={({ pressed }) => [styles.plus_btn, pressed && styles.pressed]}>
                  <AntDesign name="pluscircle" size={28} color="white" />
                </Pressable>
              </View>
              <Text style={styles.unit}>kg</Text>
            </View>
          )}

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
    fontSize: 19,
    color: "#B4B4B4",
  },
  nav_item_active: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: "#FFFFFF",
  },
  nav_text_active: {
    fontFamily: "Montserrat-Medium",
    fontSize: 19,
    color: "#FFFFFF",
  },
  edit_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  edit_content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  edit_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 30,
    color: "#FFFFFF",
  },
  unit: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 5,
  },
  edit_btn: {
  position: ""
  width: "100%",
  bottom: 10,
  alignItems: "center",
  padding: 15,
  borderRadius: 12,
  backgroundColor: "#FFFFFF"
  },
  pressed: {
    opacity: 0.7
  }
});