import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import apiClient from './../../../../services/apiService';
const AllExercise = ({ navigation, userStatistic }) => {
  const [exerciseList, setExerciseList] = useState([])

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await apiClient.get('/ExerciseTypes');
        const exerciseData = response.data
        setExerciseList(exerciseData);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  const handlePressExercise = (exercise) => {
    navigation.navigate("ExerciseDetailScreen", { typeEx: exercise.exerciseTypeName, exerciseId: exercise.exerciseTypeId, userStatistic: userStatistic });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {exerciseList.map((ex) => (
        <Pressable
          style={({ pressed }) => [
            styles.exercise_item,
            pressed && styles.pressed,
          ]}
          key={ex.exerciseTypeId}
          onPress={() => handlePressExercise(ex)}
        >
          <AntDesign name="pluscircle" size={28} color="#E55733" />
          <View style={styles.exercise_text_container}>
            <Text style={styles.exercise_tile}>{ex.exerciseTypeName}</Text>
            <Text style={styles.exercise_desc}>Bài tâp cá nhân</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default AllExercise;

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
  pressed: {
    opacity: 0.5,
  },
});
