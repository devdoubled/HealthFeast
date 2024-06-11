import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalAddExercise = ({ visible, handleCloseModal }) => {
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
                    <Text></Text>
                </View>
            </Pressable>
        </Modal>
    )
}

export default ModalAddExercise

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
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        alignItems: "center",
    },
})