import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import ModalAddImg from "../../../assets/images/modal_add.png";
const ModalAddMeal = ({ visible, item = {} ,handleCloseModal, handleAddMealBreakfast, handleAddMealLunch, handleAddMealDinner, handleAddMealSnack }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <Pressable style={styles.modalContainer} onPress={handleCloseModal}>
        <View
          style={styles.modalContent}
          onStartShouldSetResponder={() => true}
        >
          <Pressable style={styles.close_icon} onPress={handleCloseModal}>
            <AntDesign name="closecircleo" size={26} color="white" />
          </Pressable>
          <View style={styles.modal_title}>
            <Image source={ModalAddImg} style={styles.modal_img} />
            <Text style={styles.modal_text}>Thêm vào bữa ăn bạn muốn</Text>
          </View>
          <View style={styles.choose_meal}>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
              onPress={() => handleAddMealBreakfast(item)}
            >
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
              onPress={handleAddMealLunch}
            >
              <Text style={styles.choose_text}>Bữa ăn trưa</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
              onPress={handleAddMealDinner}
            >
              <Text style={styles.choose_text}>Bữa ăn tối</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
              onPress={handleAddMealSnack}
            >
              <Text style={styles.choose_text}>Bữa ăn vặt</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
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
    bottom: 155,
    width: 360,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#464646",
    borderRadius: 20,
    alignItems: "center",
  },
  close_icon: {
    position: "absolute",
    top: 15,
    right: 20,
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
  pressed: {
    opacity: 0.7,
  },
});
