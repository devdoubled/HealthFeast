import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import exercise from "../../../data/exercise.js";
import { getIcon } from "../../../utils/getIconExercise.js";
const SelfExercise = () => {
  return (
    <View>
      {exercise.map((ex) => (
        <Pressable style={styles.exercise_item} key={ex.id}>
            <View>
          {getIcon(ex.exercise)}

            </View>
          <View style={styles.exercise_text_container}>
            <Text style={styles.exercise_tile}>{ex.exercise}</Text>
            <Text style={styles.exercise_desc}>Bài tâp cá nhân</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default SelfExercise;

const styles = StyleSheet.create({
  exercise_item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: "#464646",
  },
  exercise_text_container: {
    marginLeft: 15,
    flexDirection: "column",
  },
  exercise_tile: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  exercise_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginTop: 3,
    color: "#B4B4B4",
  },
});
