import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllExercise = () => {
  return (
    <View>
      <Pressable style={styles.exercise_item}>
        <AntDesign name="pluscircle" size={28} color="#E55733" />
        <View style={styles.exercise_text_container}>
          <Text style={styles.exercise_tile}>Bài tập 1</Text>
          <Text style={styles.exercise_desc}>Bài tâp cá nhân</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default AllExercise

const styles = StyleSheet.create({})