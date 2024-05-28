import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const ExerciseDropdown = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const runningData = [
    {
      id: 1,
      label: "Người mới",
      value: 200,
    },
    {
      id: 2,
      label: "Trung bình",
      value: 200,
    },
    {
      id: 3,
      label: "Nâng cao",
      value: 200,
    },
    {
      id: 4,
      label: "Chuyên nghiệp",
      value: 200,
    },
  ];
  return (
    <View style={styles.drowdown_container}>
      <Pressable
        style={styles.dropdown_selection}
        onPress={() => setIsShowDropdown(!isShowDropdown)}
      >
        <Text style={styles.selected_item}>Item 1</Text>
        <AntDesign
          name={isShowDropdown ? "down" : "up"}
          size={22}
          color="#E55733"
        />
      </Pressable>
      {isShowDropdown && (
        <FlatList
          data={runningData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={({pressed})[styles.item_selection]}>
              <Text style={styles.item_text}>{item.label}</Text>
            </Pressable>
          )}
          vertical
          showsVerticalScrollIndicator={false}
          style={styles.dropdown_list}
          contentContainerStyle={styles.dropdown_list_content}
        />
      )}
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
    top: 58,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E55733",
    backgroundColor: "#2E2E2E",
    zIndex: 3,
  },
  dropdown_list_content: {
    justifyContent: "center",
  },
  item_selection: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  item_selected: {
    backgroundColor: "#rgba(255, 255, 255, 0.1)",
  },
  item_text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#E55733",
  },
  item_text_selected: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    color: "#E55733",
  },
  pressed: {
    opacity: 0.1
  }
});
