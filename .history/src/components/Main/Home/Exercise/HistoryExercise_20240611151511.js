import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import apiClient from "../../../../services/apiService.js";
import { getIcon } from "../../../../utils/getIconExercise.js";
const HistoryExercise = () => {
  const [exerciseHistory, setExerciseHistory] = useState([])
  const [dateHistory, setDateHistory] = useState("")
  useEffect(() => {
    const fetchExerciseHistory = async () => {
      try {
        const res = await apiClient.get('/ExerciseHistories/personal');
        const data = res.data;
        const exData = data.map((exData) => exData)
        console.log(exData)
        setExerciseHistory(exData)
        // setDateHistory(data.date)
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
      {exerciseHistory.map((exerciseData) => (
        {exerciseData.exercises.map((ex) => (

        ))}
        
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