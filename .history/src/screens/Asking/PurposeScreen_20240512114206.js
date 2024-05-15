import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PurposeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mục đích của bạn là gì?</Text>
    </View>
  )
}

export default PurposeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    }
})