import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import exercise from "../../../../data/exercise.js";
import { getIcon } from "../../../../utils/getIconExercise.js";
const HistoryExercise = () => {
  const [exerciseHistory, setExerciseHistory] = useState([])
  const [dateHistory, setDateHistory] = useState("")
  useEffect(() => {
    const fetchExerciseHistory = async () => {
      try {
        const res = await apiClient.get('/ExerciseHistories/personal');
        setExerciseHistory(res.data.exercises)
        setDateHistory(res.data.date)
      } catch (error) {
        console.error('Error fetching exercise history:', error);
      }
    };

    fetchExerciseHistory();
  }, [])
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {exerciseHistory.map((ex) => (
        <Pressable style={styles.exercise_item} key={ex.exerciseId}>
          <View style={styles.exercise_icon}>{getIcon(ex.exerciseTypeName)}</View>
          <View style={styles.exercise_text_container}>
            <Text style={styles.exercise_tile}>{ex.exerciseTypeName}</Text>
            <Text style={styles.exercise_desc}>{dateHistory}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HistoryExercise;

const styles = StyleSheet.create({
  exercise_item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: "#464646",
  },
  exercise_icon: {
    width: 40,
  },
  exercise_text_container: {
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
