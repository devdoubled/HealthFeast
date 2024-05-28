import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExerciseDropdown = () => {
    // const runningData = [
    //     {
    //         id: 1,
    //         label: ""
    //     }
    // ]
  return (
    <View style={styles.drowdown_container}>
      <View style={styles.dropdown_selection}>
        <Text style={styles.selected_item}>Item 1</Text>
        <AntDesign name="down" size={22} color="#E55733" />
      </View>
      <View
        style={styles.dropdown_list}
      >
        <Pressable style={styles.item_selection}>
          <Text style={styles.item_text}>Item 1</Text>
        </Pressable>
        <Pressable style={[styles.item_selection, styles.item_selected]}>
          <Text style={[styles.item_text, styles.item_text_selected]}>Item 1</Text>
        </Pressable>
        <Pressable style={styles.item_selection}>
          <Text style={styles.item_text}>Item 1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ExerciseDropdown;

const styles = StyleSheet.create({
  drowdown_container: {
    position: "relative",
    flex: 1,
  },
  dropdown_selection: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
    zIndex: 2,
  },
  selected_item: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  dropdown_list: {
    position: "absolute",
    top: 55,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E55733",
    backgroundColor: "#FFFFFF",
    zIndex: 3,
  },
  item_selection: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  item_selected: {
    backgroundColor: "#rgba(255, 255, 255, 0.1)"
  },
  item_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  item_text_selected: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#E55733",
  }
});
