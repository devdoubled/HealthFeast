import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import Logo from "../../../assets/images/main-logo.png";

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <View style={styles.logo_content}>
                    <Image source={Logo} style={styles.logo_img} />
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
    },
    logo_content: {
        width: 200,
        height: 200,
        borderRadius: 20,
        padding: 10,
    },
    logo_img
})