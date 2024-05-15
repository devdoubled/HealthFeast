import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import asking
const AskingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AskingScreen</Text>
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