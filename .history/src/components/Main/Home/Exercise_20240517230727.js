import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Exercise = () => {
  return (
    <>
      <View style={styles.exercise_left}>
          <Text style={styles.exercise_text}>Bài tập</Text>
          <View style={styles.exercise_detail}>
            <View style={styles.exercise_calo}>
              <MaterialIcons name="local-fire-department" size={24} color="#E55733" />
              <Text style={styles.burn_text}>100 kCal</Text>
            </View>
            <View style={styles.exercise_time}>
            <MaterialIcons name="access-time" size={24} color="#E55733" />
              <Text style={styles.time_text}>1:20 Hr</Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_right}>
          <Pressable style={({pressed}) => pressed && styles.add_pressed}>
            <MaterialCommunityIcons name="plus-circle" size={40} color="black" />
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