import React from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import ErrorImg from "../../../assets/images/error.png"
import SuccessImg from "../../../assets/images/success.png"
const ModalPayment = ({ visible, handleCloseModal, status }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={handleCloseModal}
        >
            <Pressable style={styles.modalContainer} onPress={handleCloseModal}>
                <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
                    <View style={styles.payment_img_container}>
                        <Image source={status === "success" ? SuccessImg : ErrorImg} style={styles.payment_img} />
                    </View>
                    <Text style={[styles.payment_title, { color: status === "success" ? "#9ABF5A" : "#ED1B2E"}]}>
                        {status === "success" ? "Thanh toán thành công" : "Thanh toán thất bại"}
                    </Text>
                    <Text style={styles.payment_desc}>
                        {status === "success" ? "Thanh toán được thực hiện thành công" : "Thanh toán đã bị hủy"}
                    </Text>
                    <Pressable 
                        style={({ pressed }) => [styles.confirm_btn, pressed && styles.btn_pressed, { backgroundColor: status === "success" ? "#9ABF5A" : "#ED1B2E"}]} 
                        onPress={handleCloseModal}
                    >
                        <Text style={styles.confirm_txt}>Xác nhận</Text>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    )
}

export default ModalPayment

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContent: {
        width: 360,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        alignItems: "center",
    },
    payment_img_container: {
        width: 80,
        height: 80,
    },
    payment_img: {
        width: "100%",
        height: "100%",
    },
    payment_title: {
        fontFamily: "Montserrat-Medium",
        fontSize: 18,
        color: "#000000",
        paddingTop: 10,
    },
    payment_desc: {
        fontFamily: "Montserrat-Regular",
        fontSize: 15,
        color: "#000000",
        paddingTop: 5,
    },
    confirm_btn: {
        width: "100%",
        marginTop: 10,
        padding: 10,
        borderRadius: 12,
        alignItems: "center",
    },
    confirm_txt: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#FFFFFF",
    },
    btn_pressed: {
        opacity: 0.7
    }
})