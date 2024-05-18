import { StyleSheet, Text, ScrollView, View, Image, Platform } from 'react-native'
import React from 'react'

const CaloriesTrackerScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <Text>CaloriesTrackerScreen</Text>
    </ScrollView>
  )
}

export default CaloriesTrackerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
})