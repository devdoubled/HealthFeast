import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const MealResultDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealResultDetailScreen</Text>
    </View>
  )
}

export default MealResultDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})