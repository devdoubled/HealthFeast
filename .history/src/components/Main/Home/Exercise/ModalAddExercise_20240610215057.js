import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalAddExercise = () => {
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

export default ModalAddExercise

const styles = StyleSheet.create({})