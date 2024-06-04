import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <View ></View>
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