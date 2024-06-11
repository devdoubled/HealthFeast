import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import apiClient from "../../../../services/apiService.js";
import { getIcon } from "../../../../utils/getIconExercise.js";
const SelfExercise = () => {
  const [exerciseHistory, setExerciseHistory] = useState([])
  useEffect(() => {
    const fetchExerciseHistory = async () => {
      try {
        const res = await apiClient.get('/ExerciseHistories/personal');
        const data = res.data;
        const exData = data.map((exData) => exData)
        setExerciseHistory(exData)
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
      {exerciseHistory.sort((a, b) => new Date(b.date) - new Date(a.date)).map((exerciseData) => (
        exerciseData.exercises.map((ex) => (
          <Pressable style={styles.exercise_item} key={ex.exerciseId}>
            <View style={styles.exercise_icon}>{getIcon(ex.exerciseTypeName)}</View>
            <View style={styles.exercise_text_container}>
              <Text style={styles.exercise_tile}>{ex.exerciseTypeName}</Text>
              <Text style={styles.exercise_desc}>Thời gian: {exerciseData.date}</Text>
            </View>
          </Pressable>
        ))
      ))}
    </ScrollView>
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
