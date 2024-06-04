import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, View, Text, Pressable } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";

const PaymentScreen = () => {
    const width = Dimensions.get("window").width;

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <View style={styles.logo_content}>
                    <Image source={Logo} style={styles.logo_img} />
                </View>
            </View>
            <View style={[styles.payment_container, { width: width - 32 }]}>
                <View style={styles.payment_header}>
                    <Text style={styles.payment_title}>Bạn đã chọn</Text>
                    <Pressable style={styles.payment_change}>
                        <Text style={styles.change_text}>Thay đổi gói</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
    },
    logo_container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
    },
    logo_content: {
        width: 100,
        height: 100,
    },
    logo_img: {
        width: "100%",
        height: "100%"
    },
    payment_container: {
        marginHorizontal: 16,
    },
    payment_header
})