import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Meal = ({width}) => {
  return (
    <View style={[styles.meal_container, { width: width - 32 }]}></View>
  )
}

export default Meal

const styles = StyleSheet.create({
    morning_meal: {
        height: 150,
        borderRadius: 13,
        marginBottom: 12,
        backgroundColor: "#F3F2F1",
      },
})