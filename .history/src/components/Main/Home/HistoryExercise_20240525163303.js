import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import exercise from "../../../data/exercise.js";

const HistoryExercise = () => {
  return (
    <View>
    {exercise.map((ex) => (
        <Pressable style={styles.exercise_item} key={ex.id}>
        {ex.icon}
        <View style={styles.exercise_text_container}>
          <Text style={styles.exercise_tile}>{ex.exercise}</Text>
          <Text style={styles.exercise_desc}>Bài tâp cá nhân</Text>
        </View>
      </Pressable>
    ))}
  
</View>
  )
}

export default HistoryExercise

const styles = StyleSheet.create({})