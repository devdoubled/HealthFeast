import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import {
  Ionicons
} from "@expo/vector-icons";
const ExerciseScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
       <View style={[styles.exercise_container, { width: width - 32 }]}>
          <View style={styles.search_container}>
          <Ionicons name="search" size={28} color="white" />
          </View>
       </View>
    </View>
  )
}

export default ExerciseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: Platform.OS === "ios" ? 80 : 70,
  },
  exercise_container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#2E2E2E",
  },
  search_container: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center"
  }
})