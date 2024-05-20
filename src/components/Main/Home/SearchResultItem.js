import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const SearchResultItem = ({ handlePressSearchResult }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.result_item_container,
        pressed && styles.pressed,
      ]}
      onPress={handlePressSearchResult}
    >
      <AntDesign name="pluscircle" size={28} color="#9ABF5A" />
      <View style={styles.result_text_container}>
        <Text style={styles.result_tile}>Salad trộn</Text>
        <Text style={styles.result_desc}>19.97 kCal - 28.33 g</Text>
      </View>
    </Pressable>
  );
};

export default SearchResultItem;

const styles = StyleSheet.create({
  result_item_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: "#464646",
  },
  result_text_container: {
    marginLeft: 15,
    flexDirection: "column",
  },
  result_tile: {
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },
  result_desc: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginTop: 3,
    color: "#B4B4B4",
  },
  pressed: {
    opacity: 0.5,
  },
});
