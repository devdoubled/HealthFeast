import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import navExercise from "../../../data/navExercise.js";
const ExerciseScreen = () => {
  const width = Dimensions.get("window").width;
  const [nav, setNav] = useState("Bài tập của bạn")
  const handleChangeNavExercise = (title) => {

  }
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
            <Pressable style={styles.nav_item} key={nav.id} onPress={() => handleChangeNavExercise(nav.item)}>
              <Text style={styles.nav_text}>{nav.title}</Text>
            </Pressable>
          ))}
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
    borderColor: "#E55733",
  },
  nav_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
