import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

const ModalAddMeal = () => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Thêm vào bữa ăn thành công!</Text>
            <Pressable
              style={({ pressed }) => [
                styles.closeButton,
                pressed && styles.pressed,
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}

export default ModalAddMeal

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
      },
})