import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const ModalAddMealSuccess = () => {
    useEffect(() => {
        let timer;
        if (visible) {
            timer = setTimeout(() => {
                handleCloseModal();
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [visible]);

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
                    <Text style={styles.notify_title}>Thông báo</Text>
                    <Text style={styles.notify_content}>Đã thêm món ăn</Text>
                </View>
            </Pressable>
        </Modal>
    )
}

export default ModalAddMealSuccess

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
    notify_title: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#231F20",
    },
    notify_content: {
        fontFamily: "Montserrat-Medium",
        fontSize: 18,
        paddingTop: 3,
        color: "#9ABF5A",
    }
})