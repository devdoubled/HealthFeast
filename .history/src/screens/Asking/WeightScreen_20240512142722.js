import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WeightScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WeightScreen</Text>
    </View>
  )
}

export default WeightScreen

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 35,
    marginTop: 50,
  },
})