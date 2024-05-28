import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Platform, StyleSheet, TextInput, View } from "react-native";
const ExerciseScreen = () => {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={[styles.exercise_container, { width: width - 32 }]}>
        <View style={styles.search_container}>
          <Ionicons name="search" size={26} color="white" />
          <TextInput
            style={styles.input_search}
            placeholder="Tìm kiếm bài tập"
            placeholderTextColor="white"
            keyboardType="default"
          />
        </View>
      </View>
    </View>
  );
};

export default ExerciseScreen;

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
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#FFFFFF",
  },
  input_search: {
    flex: 1,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    marginLeft: 10,
    color: "#FFFFFF",
  },
});