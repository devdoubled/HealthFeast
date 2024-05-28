import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import exercise from "../../../../data/exercise.js";
const AllExercise = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {exercise.map((ex) => (
        <Pressable
          style={({ pressed }) => [
            styles.exercise_item,
            pressed && styles.pressed,
          ]}
          key={ex.id}
        >
          <AntDesign name="pluscircle" size={28} color="#E55733" />
          <View style={styles.exercise_text_container}>
            <Text style={styles.exercise_tile}>{ex.exercise}</Text>
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
