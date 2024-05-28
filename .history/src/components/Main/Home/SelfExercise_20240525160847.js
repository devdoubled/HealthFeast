import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
const SelfExercise = () => {
  return (
    <View style={styles.exercise_list}>
        <Pressable style={styles.exercise_item}>
        <AntDesign name="pluscircle" size={28} color="#9ABF5A" />
        </Pressable>
    </View>
  )
}

export default SelfExercise

const styles = StyleSheet.create({})