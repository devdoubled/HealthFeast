import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AllExercise from "../../../components/Main/Home/AllExercise";
import HistoryExercise from "../../../components/Main/Home/HistoryExercise.js";
import SelfExercise from "../../../components/Main/Home/SelfExercise.js";
import navExercise from "../../../data/navExercise.js";
const ExerciseScreen = () => {
  const width = Dimensions.get("window").width;
  const [navActive, setNavActive] = useState("Bài tập của bạn");
  const handleChangeNavExercise = (title) => {
    setNavActive(title);
  };
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
        <View style={styles.nav_exercise}>
          {navExercise.map((nav) => (
            <Pressable
              style={[
                styles.nav_item,
                navActive === nav.title && styles.nav_item_active,
              ]}
              key={nav.id}
              onPress={() => handleChangeNavExercise(nav.title)}
            >
              <Text style={styles.nav_text}>{nav.title}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.nav_exercise_container}>
          {navActive === "Tất cả" && <AllExercise />}
          {navActive === "Bài tập của bạn" && <SelfExercise />}
          {navActive === "Lịch sử" && <HistoryExercise />}
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
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#FFFFFF",
  },
  input_search: {
    flex: 1,
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginLeft: 10,
    color: "#FFFFFF",
  },
  nav_exercise: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  nav_item: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  nav_item_active: {
    borderColor: "#E55733",
  },
  nav_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
  nav_exercise_container: {
    flex: 1,
    marginTop: 15,
  },
});
