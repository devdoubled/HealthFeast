import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ExerciseDropdown = () => {
  return (
    <View style={styles.dropdown_selection}>
      <Text>ExerciseDropdown</Text>
    </View>
  );
};

export default ExerciseDropdown;

const styles = StyleSheet.create({
  dropdown_selection: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
  },
});
