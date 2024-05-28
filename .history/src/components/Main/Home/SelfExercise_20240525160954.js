import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const SelfExercise = () => {
  return (
    <View style={styles.exercise_list}>
      <Pressable style={styles.exercise_item}>
        <AntDesign name="pluscircle" size={28} color="#E55733" />
        <View style={styles.exercise_container}>
          <Text style={styles.exercise_tile}>Bài tập 1</Text>
          <Text style={styles.exercise_desc}>Bài tâp cá nhân</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SelfExercise;

const styles = StyleSheet.create({});
