import React from 'react'
import { Platform, ScrollView, StyleSheet, Text } from 'react-native'
import RecipeIconText from "../../../";
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