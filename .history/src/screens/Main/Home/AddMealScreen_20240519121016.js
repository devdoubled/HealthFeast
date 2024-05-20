import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddMealScreen = () => {
  return (
    <View>
      <Text>AddMealScreen</Text>
    </View>
  )
}

export default AddMealScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})