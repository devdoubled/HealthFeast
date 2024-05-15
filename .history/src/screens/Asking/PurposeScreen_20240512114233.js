import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PurposeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>Mục đích của bạn là gì?</Text>
      <Text sty><Text/>
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