import * as Updates from 'expo-updates';
import React, { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';

const ModalLogout = ({ visible, handleCloseModal }) => {
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
        await Updates.reloadAsync();
    }
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
                    <Text style={styles.logout_title}>Bạn muốn đăng xuất?</Text>
                    <Text style={styles.logout_desc}>Nhớ quay lại nhé!</Text>
                    <View style={styles.logout_action}>
                        <Pressable style={({ pressed }) => [styles.cancel_btn, pressed && styles.btn_pressed]} onPress={handleCloseModal}>
                            <Text style={styles.btn_text}>Quay lại</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [styles.logout_btn, pressed && styles.btn_pressed]} onPress={handleLogout}>
                            <Text style={styles.btn_text}>Đăng xuất</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>
    )
}

export default ModalLogout

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    modalContent: {
        width: 360,
        padding: 20,
        backgroundColor: "#2E2E2E",
        borderRadius: 20,
        alignItems: "center",
    },
    logout_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 18,
        color: "#FFFFFF",
    },
    logout_desc: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#FFFFFF",
        paddingTop: 5,
    },
    logout_action: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
    },
    cancel_btn: {
        width: "47%",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        backgroundColor: "#B4B4B4"
    },
    logout_btn: {
        width: "47%",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        backgroundColor: "#9ABF5A"
    },
    btn_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#FFFFFF",
    },
    btn_pressed: {
        opacity: 0.7
    }
})