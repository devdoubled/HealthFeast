import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const WatingScan = () => {
  return (
    <View style={styles.conatiner}>
      <Text>WatingScan</Text>
    </View>
  )
}

export default WatingScan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
      },
})