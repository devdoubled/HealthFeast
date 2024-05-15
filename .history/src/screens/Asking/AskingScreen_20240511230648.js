import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
const AskingScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList/>
    </View>
  )
}

export default AskingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})