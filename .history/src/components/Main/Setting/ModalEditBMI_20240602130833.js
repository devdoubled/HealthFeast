import React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'

const ModalEditBMI = ({ visible, handleCloseModal}) => {
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
        </View>
      </Pressable>
    </Modal>
  )
}

export default ModalEditBMI

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
})