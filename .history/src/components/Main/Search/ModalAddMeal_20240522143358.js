import React from 'react'
import { Modal, StyleSheet, Text, View, Pressable } from 'react-native'

const ModalAddMeal = ({ visible, handleCloseModal}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            
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