import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'
import Logo from "../../../assets/images/main-logo.png";

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <View style={styles.logo_content}>
                    <Image source={Logo} style={styles.logo_I}/>
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
})