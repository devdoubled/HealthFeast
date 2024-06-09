import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#9ABF5A" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
})