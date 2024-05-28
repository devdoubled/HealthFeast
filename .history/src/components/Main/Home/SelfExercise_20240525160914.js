import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const SelfExercise = () => {
  return (
    <View style={styles.exercise_list}>
      <Pressable style={styles.exercise_item}>
        <AntDesign name="pluscircle" size={28} color="#9ABF5A" />
        <View style={styles.result_text_container}>
          <Text style={styles.result_tile}>Salad trộn</Text>
          <Text style={styles.result_desc}>19.97 kCal - 28.33 g</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SelfExercise;

const styles = StyleSheet.create({});
