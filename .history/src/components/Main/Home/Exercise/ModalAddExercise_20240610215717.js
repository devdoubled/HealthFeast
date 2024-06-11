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
                    <Text>Thông báo</Text>
                    <Text>Đã thêm bài tập</Text>
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
        bottom: 100,
        width: 360,
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
})