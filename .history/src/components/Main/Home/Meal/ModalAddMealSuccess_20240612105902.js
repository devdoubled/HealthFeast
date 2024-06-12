import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
                    <Text style={styles.notify_content}>Đã thêm bài tập</Text>
                </View>
            </Pressable>
        </Modal>
    )
}

export default ModalAddMealSuccess

const styles = StyleSheet.create({})