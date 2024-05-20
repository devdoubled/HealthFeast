import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

const MealResultDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result_detail_container}>
        
        <View/>
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
      result_detail_container: {
        
      }
})