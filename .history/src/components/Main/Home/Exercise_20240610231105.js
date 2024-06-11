import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Exercise = ({handlePressExcersize, exerciseHistory}) => {
  const convertTime(minutes) {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours} Hr ${remainingMinutes} Min`;
    } else {
      return `${minutes} Min`;
    }
  }
  return (
    <>
      <View style={styles.exercise_left}>
          <Text style={styles.exercise_text}>Bài tập</Text>
          <View style={styles.exercise_detail}>
            <View style={styles.exercise_calo}>
              <MaterialIcons name="local-fire-department" size={24} color="#E55733" />
              <Text style={styles.burn_text}>{exerciseHistory.totalCalBurned} kCal</Text>
            </View>
            <View style={styles.exercise_time}>
            <MaterialIcons name="access-time" size={24} color="#E55733" />
              <Text style={styles.time_text}>{exerciseHistory.totalDuration} Hr</Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_right}>
          <Pressable style={({pressed}) => pressed && styles.add_pressed} onPress={handlePressExcersize}>
            <MaterialCommunityIcons name="plus-circle" size={36} color="black" />
          </Pressable>
        </View>
    </>
  )
}

export default Exercise

const styles = StyleSheet.create({
  exercise_left: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  exercise_text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  exercise_detail: {
    flexDirection: "row",
    alighItems: "center",
    justifyContent: "flex-start",
  },
  exercise_calo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  burn_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 5,
  },
  exercise_time: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  time_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#000000",
    marginLeft: 5,
  },
  exercise_right: {
    alignItems: "center",
    justifyContent: "center",
  },
  add_pressed: {
    opacity: 0.7
  }
})