import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

const ModalEditBMI = () => {
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
        </View>
      </Pressable>
    </Modal>
  )
}

export default ModalEditBMI

const styles = StyleSheet.create({})