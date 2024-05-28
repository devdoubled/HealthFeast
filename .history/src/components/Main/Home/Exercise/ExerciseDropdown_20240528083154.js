import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExerciseDropdown = () => {
  return (
    <View style={styles.drowdown_container}>
      {/* <View style={styles.dropdown_selection}>
        <Text style={styles.selected_item}>Item 1</Text>
        <AntDesign name="down" size={22} color="#E55733" />
      </View> */}
      <View
        style={styles.dropdown_list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Pressable>
          <Text>Item 1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ExerciseDropdown;

const styles = StyleSheet.create({
  drowdown_container: {
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
  },
  selected_item: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#FFFFFF",
  },
  dropdown_list: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E55733",
  },
});
