import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Meal = ({width}) => {
  return (
    <View style={[styles.morning_meal, { width: width - 32 }]}></View>
  )
}

export default Meal

const styles = StyleSheet.create({})