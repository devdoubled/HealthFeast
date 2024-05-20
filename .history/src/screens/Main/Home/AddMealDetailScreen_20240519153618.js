import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const AddMealDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddMealDetailScreen</Text>
    </View>
  )
}

export default AddMealDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginBottom: Platform.OS === "ios" ? 80 : 70,
      },
})